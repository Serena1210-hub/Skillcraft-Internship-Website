import React from 'react';
import { useNavigate } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import Footer from '../components/Footer';

const AboutPage = () => {
  const navigate = useNavigate();

  const partners = [
    'TechCorp Global',
    'SecureNet Solutions',
    'CloudScale Systems',
    'DataDriven Inc.',
    'InnovateTech Labs',
    'CyberGuard Pro',
    'DevOps Masters',
    'AI Frontiers'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SkillCraft</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals through immersive internship experiences and industry partnerships.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-4">
                At SkillCraft, we believe that practical experience is the cornerstone of professional development. Our mission is to bridge the gap between academic learning and industry demands by providing students with hands-on internship opportunities.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                We partner with leading technology companies to create meaningful learning experiences that prepare our interns for successful careers in Software Engineering and Cybersecurity.
              </p>
              <p className="text-gray-600 text-lg">
                Through mentorship, cutting-edge training, and real-world projects, we transform passionate learners into job-ready professionals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Our Goal</h3>
                <p className="text-gray-700">Building the future of technology, one intern at a time</p>
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
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and methodologies to prepare interns for the future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We foster teamwork and communication skills essential for professional success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain high standards in training, mentorship, and industry partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Inclusivity</h3>
              <p className="text-gray-600">
                We welcome diverse perspectives and create an environment where everyone can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Industry Partners</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            We collaborate with leading technology companies to provide real-world experience and job placement opportunities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-semibold text-center">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What Makes SkillCraft Different</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Mentorship</h3>
              <p className="text-gray-200">
                Learn directly from industry professionals with years of experience in Software Engineering and Cybersecurity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Real Projects</h3>
              <p className="text-gray-200">
                Work on actual projects that make an impact, not just theoretical exercises or simulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Career Placement</h3>
              <p className="text-gray-200">
                High placement rate with our partner companies and dedicated career support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards a rewarding career in technology. Apply now and become part of the SkillCraft community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/signup')}
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 font-medium text-lg transition-colors"
            >
              Apply Now →
            </button>
            <button 
              onClick={() => navigate('/eligibility')}
              className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-gray-50 font-medium text-lg transition-colors"
            >
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;