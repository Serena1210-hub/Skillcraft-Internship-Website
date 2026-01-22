export default function Home() {
  return (
    <div className="text-center">
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20">
        <h1 className="text-4xl font-bold">SkillCraft Internship Scholarship</h1>
        <p className="mt-4">Fully sponsored, merit-based internship program</p>
        <a href="/register" className="btn-primary mt-6 inline-block">Apply Now</a>
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-bold">About the Program</h2>
        <p className="max-w-2xl mx-auto mt-4">
          Equipping Cameroonian students with real-world tech skills.
        </p>
      </section>
    </div>
  )
}
