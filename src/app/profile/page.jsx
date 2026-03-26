
import { cookies } from "next/headers"
import { verifyToken } from "../../lib/auth"

export default async function Profile() {

  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value


  const user = token ? await verifyToken(token) : null

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Email: {user?.email}</p>
    </div>
  )
}