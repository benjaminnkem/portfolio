import Message from "@/utils/schema/Message";
import connectToDB from "@/utils/schema/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();

  await connectToDB();
  await Message.create(body);
  return NextResponse.json({ msg: "Message received", data: body });
}
