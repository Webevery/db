import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);

    console.log("mongoos is connected");
  } catch (error) {
    // throw new Error("Connection failed!");
    console.log("utils/db.js err", error);
  }
};

export default connect;
