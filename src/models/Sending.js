import mongoose from "mongoose";

const { Schema } = mongoose;

const sendingSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    social: {
      type: String,
    },
    sendingDate: {
      type: String,
    },
    userName: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Sending ||
  mongoose.model("Sending", sendingSchema);
