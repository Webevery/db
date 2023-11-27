import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Sending from "@/models/Sending";
import { getItemsWithEmptyNotes } from "@/app/(pages)/in-line/page";

export const POST = async (request) => {
  const body = await request.json();
  // const newSending = await new Sending(body);

  try {
    await connect();
    // await newSending.save();
    await Sending.create(body);
    console.log("Sending", Sending);
    return new NextResponse("Sending has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const GET = async (request) => {
  //   return new NextResponse("it works!", { status: 200 });
  try {
    await connect();
    // const sendings = await Sending.find();

    // Sort Data by date and time
    const sendings = await Sending.find().sort({ createdAt: -1 });
    // console.log("sendings DB", sendings);

    return new NextResponse(JSON.stringify(sendings), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
};

export const DELETE = async (request) => {
  // console.log(request.nextUrl.searchParams.get("id"));
  const id = request.nextUrl.searchParams.get("id");

  try {
    await connect();

    await Sending.findByIdAndDelete(id);

    return new NextResponse("Sending has been deleted", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
