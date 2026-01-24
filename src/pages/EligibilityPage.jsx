import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import PublicHeader from '../components/PublicHeader';
import Footer from '../components/Footer';

const EligibilityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Eligibility Requirements</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Review the requirements below to ensure you qualify for the SkillCraft Internship Scholarship Program.
          </p>
        </div>
      </section>

      {/* Basic Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Basic Requirements</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            All applicants must meet the following criteria to be considered.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* University Student */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-3xl">🎓</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold mr-2">University Student</h3>
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-600">
                    Currently enrolled in an accredited university or college pursuing a relevant degree.
                  </p>
                </div>
              </div>
            </div>

            {/* Minimum GPA */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-3xl">⭐</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold mr-2">Minimum GPA: 3.0</h3>
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-600">
                    Maintain a minimum cumulative GPA of 3.0 or equivalent academic standing.
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-3xl">📄</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold mr-2">Required Documents</h3>
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-600 mb-3">
                    CV/Resume, Internship Request Letter, and Portfolio link (GitHub/Drive).
                  </p>
                </div>
              </div>
            </div>

            {/* Interest in Tech */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-3xl">💻</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold mr-2">Interest in Tech</h3>
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-600">
                    Demonstrated interest in Software Engineering or Cybersecurity through coursework or projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Track</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Applicants must select one of the following tracks based on their interests and career goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Software Engineering Track */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">💻</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Software Engineering</h3>
              <p className="text-gray-600 mb-6">
                Focus on full-stack development, cloud technologies, and software architecture.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Programming experience (any language)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Understanding of data structures and algorithms</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Familiarity with version control (Git)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Portfolio of coding projects (GitHub)</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900 font-medium">
                  <strong>Recommended:</strong> Basic knowledge of web development (HTML, CSS, JavaScript) or backend frameworks.
                </p>
              </div>
            </div>

            {/* Cybersecurity Track */}
            <div className="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Learn threat analysis, security protocols, and ethical hacking fundamentals.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Basic networking knowledge</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Understanding of operating systems (Linux/Windows)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Interest in security concepts and best practices</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Analytical and problem-solving skills</span>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-900 font-medium">
                  <strong>Recommended:</strong> Certifications like CompTIA Security+ or completion of security courses are a plus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What We Look For</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Beyond the basic requirements, we value these qualities in our candidates.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                Genuine enthusiasm for technology and continuous learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Commitment</h3>
              <p className="text-gray-600">
                Dedication to completing the internship program successfully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Teamwork</h3>
              <p className="text-gray-600">
                Ability to collaborate effectively with peers and mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disqualifiers Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-red-900">Application Disqualifiers</h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            The following will result in automatic disqualification.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <X className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Incomplete Application</h4>
                  <p className="text-gray-600">Missing required documents or information</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <X className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Below Minimum GPA</h4>
                  <p className="text-gray-600">GPA below 3.0 or equivalent</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <X className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Not Currently Enrolled</h4>
                  <p className="text-gray-600">Not actively enrolled in an accredited institution</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <X className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2">Plagiarized Materials</h4>
                  <p className="text-gray-600">Submitting work that is not your own</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Application Process</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-2xl font-bold mb-2">1. Submit Application</h3>
                  <p className="text-gray-600">Complete the online application form with all required documents</p>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:w-5/12"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12"></div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:w-5/12 md:pl-8">
                  <h3 className="text-2xl font-bold mb-2">2. Initial Review</h3>
                  <p className="text-gray-600">Our team reviews your application and credentials</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12 md:text-right md:pr-8">
                  <h3 className="text-2xl font-bold mb-2">3. Assessment</h3>
                  <p className="text-gray-600">Complete a technical assessment in your chosen track</p>
                </div>
                <div className="hidden md:block w-12 h-12 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:w-5/12"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center md:justify-between">
                <div className="md:w-5/12"></div>
                <div className="hidden md:block w-12 h-12 bg-green-600 rounded-full border-4 border-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div className="md:w-5/12 md:pl-8">
                  <h3 className="text-2xl font-bold mb-2">4. Final Decision</h3>
                  <p className="text-gray-600">Receive notification about your application status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Meet the Requirements?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Don't wait! Apply now and start your journey toward a rewarding tech career.
          </p>
          <button 
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 font-medium text-lg transition-colors"
          >
            Apply Now →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EligibilityPage;