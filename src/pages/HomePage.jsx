import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import PublicHeader from '../components/PublicHeader';
import Footer from '../components/Footer';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-medium">
              <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
              Applications Now Open for 2024
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Launch Your Tech Career<br />with <span className="text-yellow-400">SkillCraft</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Join our intensive internship scholarship program and transform into a job-ready professional in Software Engineering or Cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/signup')} 
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 font-medium text-lg transition-colors"
            >
              Apply Now →
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 font-medium text-lg backdrop-blur transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Path</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Select from two industry-leading tracks designed to prepare you for high-demand careers in technology.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Software Engineering</h3>
              <p className="text-gray-600 mb-6">Master full-stack development, cloud technologies, and software architecture.</p>
              <div className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-2 text-green-600" />
                <span>React & TypeScript</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">Learn threat analysis, security protocols, and ethical hacking fundamentals.</p>
              <div className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-2 text-green-600" />
                <span>Network Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            The principles that guide everything we do at SkillCraft.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technologies and methodologies to prepare interns for the future.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">We foster teamwork and communication skills essential for professional success.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">We maintain high standards in training, mentorship, and industry partnerships.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
              <p className="text-gray-600">We welcome diverse perspectives and create an environment where everyone can thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🎓</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Apply now and take the first step towards a rewarding career in technology. Limited spots available for the upcoming cohort.
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

export default HomePage;