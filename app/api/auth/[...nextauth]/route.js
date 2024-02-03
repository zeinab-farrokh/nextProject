import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";

export const authOptions = {
  session: { strategy: "jwt",maxAge: 20 },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور پیش آمده است");
        }

        if (!email || !password) {
          throw new Error("لطفا ایمیل و پسورد خود را وارد کنید");
        }
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error(" حساب کاربری وجود ندارد لطفا ثبت نام کنید");
        }
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw new Error("ایمیل یا پسورد اشتباه است");
        }
        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}