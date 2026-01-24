import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold">SkillCraft</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering the next generation of tech professionals through immersive internship experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => navigate('/')} 
                className="block text-gray-400 hover:text-white text-sm transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/about')} 
                className="block text-gray-400 hover:text-white text-sm transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => navigate('/eligibility')} 
                className="block text-gray-400 hover:text-white text-sm transition-colors"
              >
                Eligibility
              </button>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Software Engineering</p>
              <p className="text-gray-400 text-sm">Cybersecurity</p>
              <p className="text-gray-400 text-sm">Professional Development</p>
              <p className="text-gray-400 text-sm">Industry Placement</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>contact@skillcraft.edu</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Innovation Drive<br />Tech City, TC 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 SkillCraft. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;