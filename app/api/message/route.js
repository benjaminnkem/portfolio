import Message from "@/utils/schema/Message";
import connectToDB from "@/utils/schema/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();

  await connectToDB();
  await Message.create({ ...body, date: new Date() });
  return NextResponse.json({ msg: "Message received" });
}

export async function GET(req, res) {
  await connectToDB();
  const messages = await Message.find({}).sort({ date: -1 });
  const formattedMessage = messages.map((message) => {
    return {
      _id: message._id,
      name: message.name,
      email: message.email,
      content: message.content,
      date: message.date.toLocaleString(),
    };
  });

  return NextResponse.json(formattedMessage);
}
