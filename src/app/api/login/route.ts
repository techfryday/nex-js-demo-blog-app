import { connectDB } from "../../../lib/db"

import { createToken } from "../../../lib/auth"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const db = await connectDB()
  const user = await db.collection("users").findOne({ email })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 })
  }

  const isMatch = password===user.password

  if (!isMatch) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  const token = await createToken({ userId: user._id, email })

  const res = NextResponse.json({ success: true })

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
  })

  return res
}