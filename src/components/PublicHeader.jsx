import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png'; // Importing your logo

const PublicHeader = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Added to detect active page
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/20 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Height h-20 for bigger logo */}
          
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            <span className="text-2xl font-bold text-black tracking-tight">SkillCraft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 h-full">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Eligibility', path: '/eligibility' },
            ].map((item) => (
              <button 
                key={item.path}
                onClick={() => navigate(item.path)} 
                className={`px-4 h-full relative font-medium transition-colors ${
                  location.pathname === item.path ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-black hover:bg-black/5'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37]" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => navigate('/signin')} 
              className="px-4 py-2 text-gray-700 hover:text-black font-medium transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/signup')} 
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium transition-colors"
            >
              Apply Now →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white p-4 space-y-2 shadow-xl">
          <button 
            onClick={() => { navigate('/'); setMobileMenuOpen(false); }} 
            className={`block w-full text-left p-3 rounded-lg font-medium ${location.pathname === '/' ? 'bg-gray-50 text-[#D4AF37]' : 'text-gray-700'}`}
          >
            Home
          </button>
          <button 
            onClick={() => { navigate('/about'); setMobileMenuOpen(false); }} 
            className={`block w-full text-left p-3 rounded-lg font-medium ${location.pathname === '/about' ? 'bg-gray-50 text-[#D4AF37]' : 'text-gray-700'}`}
          >
            About
          </button>
          <button 
            onClick={() => { navigate('/eligibility'); setMobileMenuOpen(false); }} 
            className={`block w-full text-left p-3 rounded-lg font-medium ${location.pathname === '/eligibility' ? 'bg-gray-50 text-[#D4AF37]' : 'text-gray-700'}`}
          >
            Eligibility
          </button>
          <div className="border-t border-gray-200 pt-2 mt-2">
            <button 
              onClick={() => { navigate('/signin'); setMobileMenuOpen(false); }} 
              className="block w-full text-left p-3 text-gray-700 font-medium"
            >
              Sign In
            </button>
            <button 
              onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }} 
              className="block w-full text-left p-3 bg-black text-white rounded-lg font-medium mt-1 text-center"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicHeader;