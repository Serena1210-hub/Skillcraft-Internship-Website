import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white px-6 py-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">
        SkillCraft
      </Link>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/application">Application</Link>
        <Link to="/assessment">Assessment</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </nav>
  )
}
