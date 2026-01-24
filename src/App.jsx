import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Application from './pages/Application';
import Assessment from './pages/Assessment';

// My provided pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EligibilityPage from './pages/EligibilityPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ResourcesPage from './pages/ResourcesPage';
import ProfilePage from './pages/ProfilePage';

// Loading Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Public Route Wrapper (redirects to dashboard if logged in)
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <LoadingSpinner />;
  
  // If user is logged in, redirect to dashboard
  if (user) return <Navigate to="/home" replace />;
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Navbar - Shows on all pages except auth pages */}
        <Navbar />
        
        <Routes>
          {/* Public Routes - Use new landing pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          
          {/* Auth Routes - Use styled pages */}
          <Route 
            path="/signin" 
            element={
              <PublicRoute>
                <SignInPage />
              </PublicRoute>
            } 
          />
          <Route 
            path="/signup" 
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            } 
          />
          
        

          {/* Protected Routes - Your collaborator's setup + my pages */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/application" element={<Application />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;