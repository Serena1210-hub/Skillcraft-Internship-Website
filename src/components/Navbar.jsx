import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const hideNavbarPaths = ['/', '/about', '/eligibility', '/signin', '/signup', '/login', '/register'];
  
  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      setProfileMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Logic for search goes here (e.g., navigate to a search results page)
      console.log('Searching for:', searchQuery);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    // Updated: Added 'bg-white/80' and 'backdrop-blur-md' for transparency
    <header className="bg-white/40 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/home')}
          >
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            <span className="text-xl font-bold text-black">SkillCraft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button onClick={() => navigate('/home')} className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100/50 font-medium transition-colors">Dashboard</button>
            <button onClick={() => navigate('/application')} className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100/50 font-medium transition-colors">Application</button>
            <button onClick={() => navigate('/resources')} className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100/50 font-medium transition-colors">Resources</button>
            <button onClick={() => navigate('/assessment')} className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100/50 font-medium transition-colors">Assessment</button>
          </nav>

          {/* Right Side Tools */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Toggle Button */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-lg transition-colors ${searchOpen ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100/50'}`}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center space-x-2 p-1.5 hover:bg-gray-100/50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user?.email?.charAt(0).toUpperCase() || 'U'}
                </div>
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                  <div className="px-4 py-3 bg-gray-50/50 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{user?.displayName || 'User'}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <button onClick={() => { navigate('/profile'); setProfileMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                    <User className="w-4 h-4 mr-2" /> View Profile
                  </button>
                  <button onClick={() => { navigate('/home'); setProfileMenuOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                    Dashboard
                  </button>
                  <div className="border-t border-gray-100 mt-1">
                    <button onClick={handleSignOut} className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50">
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-700">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* --- SEARCH BAR IMPLEMENTATION --- */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources, apps, or assessments..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <button 
                type="button" 
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 hover:text-gray-600"
              >
                ESC
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2 shadow-xl">
          <button onClick={() => { navigate('/home'); setMobileMenuOpen(false); }} className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 font-medium">Dashboard</button>
          <button onClick={() => { navigate('/application'); setMobileMenuOpen(false); }} className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 font-medium">Application</button>
          <button onClick={() => { navigate('/resources'); setMobileMenuOpen(false); }} className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 font-medium">Resources</button>
          <button onClick={() => { navigate('/assessment'); setMobileMenuOpen(false); }} className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 font-medium">Assessment</button>
          <div className="pt-2 border-t border-gray-100">
            <button onClick={handleSignOut} className="block w-full text-left p-3 text-red-600 font-medium">Sign Out</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;