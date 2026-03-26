import { SignJWT, jwtVerify } from "jose"

// const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
const secret = new TextEncoder().encode("123123")

export async function createToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(secret)
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}