import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Sending from "@/models/Sending";

// export const PUT = async (request, { params }) => {
//   const { id } = params;
//   const { newCompanyName: companyName } = await request.json(); //{ 'newcompanyName': 'companyName' }=>shold be written in  Postman
//   // const updateData = await request.json();
//   console.log("PUT id", id);
//   console.log("newCompanyName", companyName);
//   //   console.log("Request body", body);

//   try {
//     await connect();
//     await Sending.findByIdAndUpdate(id, { companyName });
//     // await Sending.findByIdAndUpdate(id, updateData); //it works if written 'body' too ))

//     return new NextResponse("Sending has been updated", { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new NextResponse("Failed to update sending", { status: 500 });
//   }
// };

export const PUT = async (request, { params }) => {
  const { id } = params;
  const updateData = await request.json();
  console.log("PUT id", id);
  console.log("Request body", updateData);

  try {
    await connect();
    const updatedSending = await Sending.findByIdAndUpdate(id, updateData);
    if (!updatedSending) {
      return new NextResponse("Sending not found", { status: 404 });
    }
    console.log("Updated sending", updatedSending);

    return new NextResponse("Sending has been updated", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to update sending", { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const sending = await Sending.findById(id);

    return new NextResponse(JSON.stringify(sending), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
