import React from 'react';

const ResourcesPage = () => {
  const resources = [
    // Cybersecurity & Network Security
    {
      id: 1,
      title: 'Cybersecurity Basics',
      description: 'Introduction to fundamental cybersecurity concepts, threat landscapes, and security principles.',
      category: 'Cybersecurity & Network Security',
      icon: '🔐',
      color: 'bg-red-100',
      lessons: 12,
      duration: '6 hours'
    },
    {
      id: 2,
      title: 'Network Security',
      description: 'Learn about firewalls, VPNs, intrusion detection systems, and network security protocols.',
      category: 'Cybersecurity & Network Security',
      icon: '🛡️',
      color: 'bg-red-100',
      lessons: 15,
      duration: '8 hours'
    },
    // Computer Science & Software Engineering
    {
      id: 3,
      title: 'Programming Fundamentals',
      description: 'Core programming concepts including variables, control structures, functions, and data structures.',
      category: 'Computer Science & Software Engineering',
      icon: '💻',
      color: 'bg-blue-100',
      lessons: 20,
      duration: '10 hours'
    },
    {
      id: 4,
      title: 'Algorithms',
      description: 'Essential algorithms, complexity analysis, sorting, searching, and problem-solving techniques.',
      category: 'Computer Science & Software Engineering',
      icon: '⚙️',
      color: 'bg-blue-100',
      lessons: 18,
      duration: '9 hours'
    },
  ];

  const cyberResources = resources.filter(r => r.category === 'Cybersecurity & Network Security');
  const csResources = resources.filter(r => r.category === 'Computer Science & Software Engineering');

  const ResourceCard = ({ resource }) => (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-white">
      <div className="flex items-start">
        <div className={`w-16 h-16 ${resource.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
          <span className="text-3xl">{resource.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-2">{resource.title}</h3>
          <p className="text-gray-600 mb-4">{resource.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {resource.lessons} lessons
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {resource.duration}
            </span>
          </div>

          <button className="px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 font-medium transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
          <p className="text-gray-600">Access essential materials and courses to help you succeed in your chosen track.</p>
        </div>

        {/* Cybersecurity & Network Security Section */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-3">
              <span className="text-2xl">🔒</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Cybersecurity & Network Security</h2>
              <p className="text-gray-600">Protect systems and networks from digital threats</p>
            </div>
          </div>
          
          <div className="grid gap-6">
            {cyberResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        {/* Computer Science & Software Engineering Section */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Computer Science & Software Engineering</h2>
              <p className="text-gray-600">Build robust software solutions and systems</p>
            </div>
          </div>
          
          <div className="grid gap-6">
            {csResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        {/* Additional Learning Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-blue-200 p-8">
          <h2 className="text-2xl font-bold mb-6">Enhance Your Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Online Courses</h3>
              <p className="text-gray-600 text-sm">Explore Coursera, Udemy, and LinkedIn Learning for supplementary courses.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Mentorship</h3>
              <p className="text-gray-600 text-sm">Get paired with industry mentors who guide you through your journey.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Join our private forum to connect with peers and share knowledge.</p>
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="mt-10 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6">Study Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Set Clear Goals</h4>
                <p className="text-gray-600 text-sm">Define what you want to achieve each week and track your progress.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Practice Regularly</h4>
                <p className="text-gray-600 text-sm">Apply concepts through coding exercises and security labs daily.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Join Study Groups</h4>
                <p className="text-gray-600 text-sm">Collaborate with peers to enhance understanding and retention.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Ask Questions</h4>
                <p className="text-gray-600 text-sm">Don't hesitate to reach out to mentors and instructors for help.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;