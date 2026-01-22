import { Navigate, Outlet } from "react-router-dom"
import { auth } from "..firebase"

export default function ProtectedRoute() {
  return auth.currentUser ? <Outlet /> : <Navigate to="/login" />
}
or