export default function Application() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Application Form</h2>

      <ul className="list-disc mb-6">
        <li>Cameroonian citizen</li>
        <li>Level 3 or Final Year</li>
        <li>GPA 3.0+</li>
      </ul>

      <input className="input" placeholder="Full Name" />
      <input className="input mt-2" placeholder="Email" />
      <input className="input mt-2" placeholder="Phone" />

      <select className="input mt-2">
        <option>Select School</option>
        <option>University of Buea</option>
        <option>University of Douala</option>
      </select>

      <select className="input mt-2">
        <option>Exam Location</option>
        <option>Buea</option>
        <option>Douala</option>
        <option>Bamenda</option>
        <option>Bafoussam</option>
      </select>

      <button className="btn-primary mt-6 w-full">Submit Application</button>
    </div>
  )
}
