import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req, res) {
  try {
    //connect to db
    await connectDB();
    console.log("connected");
    //get form info
    const body = await req.json();
    const { name, phone, email, password } = body;
    //validation on form
    if (!name || !phone || !email || !password) {
      return NextResponse.json(
        {
          error: "لطفا تمام فیلد ها را پر کنید",
        },
        { status: 422 }
      );
    }
    if (phone.length != 11 && typeof phone !== "number") {
      return NextResponse.json(
        { error: "لطفا شماره تلفن معتبر وارد کنید" },
        { status: 422 }
      );
    }
    const Isexisting = await User.findOne({ email: email });
    if (Isexisting) {
      return NextResponse.json(
        { error: "این ایمیل قبلا ثبت نام کرده است" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    //send data to db
    const user = await new User({
      name: name,
      phone: phone,
      email: email,
      password: hashedPassword,
    });
    const newUser = await user.save();

    return NextResponse.json(
      { message: "ثبت نام شما با موفقیت انجام شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور پیش امده است" },
      { status: 500 }
    );
  }
}
