// proxy.ts

import { NextResponse } from "next/server"
import { verifyToken } from "./lib/auth"

export async function proxy(req:any) {
  console.log("THIS IS PROXYYYYY")
  const token = req.cookies.get("token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const valid = await verifyToken(token)

  if (!valid) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/profile/:path*", "/site/:path*"]
}