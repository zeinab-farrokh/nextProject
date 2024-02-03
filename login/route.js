import { NextResponse } from "next/server";

import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
export async function GET(req, res) {
  try {
    await connectDB();
    const users = await User.find();
    console.log(users);
    return NextResponse.json({ data: users });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { email, password } = body;
  const user = new User({
    email,
    password,
  });
  const newUser = await user.save();

  return NextResponse.json({
    message: "new user created",
    data: body,
  });
}
