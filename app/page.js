'use client';
import { useState } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const courses = [
    {
      category: 'Computer Science',
      courses: [
        { name: 'Python Programming', url: 'https://www.python.org/about/gettingstarted/', level: 'Beginner', icon: '🐍' },
        { name: 'JavaScript Fundamentals', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript', level: 'Beginner', icon: '📜' },
        { name: 'Data Structures & Algorithms', url: 'https://www.geeksforgeeks.org/data-structures/', level: 'Intermediate', icon: '🔢' },
        { name: 'Web Development', url: 'https://www.freecodecamp.org/', level: 'Beginner', icon: '🌐' },
        { name: 'Machine Learning', url: 'https://www.coursera.org/learn/machine-learning', level: 'Advanced', icon: '🤖' },
        { name: 'Database Management', url: 'https://www.w3schools.com/sql/', level: 'Intermediate', icon: '🗄️' },
      ]
    },
    {
      category: 'Mathematics',
      courses: [
        { name: 'Calculus', url: 'https://www.khanacademy.org/math/calculus-1', level: 'Intermediate', icon: '∫' },
        { name: 'Linear Algebra', url: 'https://www.khanacademy.org/math/linear-algebra', level: 'Intermediate', icon: '📐' },
        { name: 'Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', level: 'Beginner', icon: '📊' },
        { name: 'Discrete Mathematics', url: 'https://www.coursera.org/learn/discrete-mathematics', level: 'Intermediate', icon: '🔢' },
      ]
    },
    {
      category: 'Science',
      courses: [
        { name: 'Physics', url: 'https://www.khanacademy.org/science/physics', level: 'Beginner', icon: '⚛️' },
        { name: 'Chemistry', url: 'https://www.khanacademy.org/science/chemistry', level: 'Beginner', icon: '🧪' },
        { name: 'Biology', url: 'https://www.khanacademy.org/science/biology', level: 'Beginner', icon: '🧬' },
        { name: 'Environmental Science', url: 'https://www.coursera.org/learn/environmental-science', level: 'Beginner', icon: '🌍' },
      ]
    },
    {
      category: 'Languages',
      courses: [
        { name: 'English Grammar', url: 'https://www.grammarly.com/blog/category/handbook/', level: 'Beginner', icon: '📚' },
        { name: 'Spanish', url: 'https://www.duolingo.com/course/es/en/Learn-Spanish', level: 'Beginner', icon: '🇪🇸' },
        { name: 'French', url: 'https://www.duolingo.com/course/fr/en/Learn-French', level: 'Beginner', icon: '🇫🇷' },
        { name: 'German', url: 'https://www.duolingo.com/course/de/en/Learn-German', level: 'Beginner', icon: '🇩🇪' },
      ]
    },
    {
      category: 'Business & Economics',
      courses: [
        { name: 'Economics 101', url: 'https://www.khanacademy.org/economics-finance-domain', level: 'Beginner', icon: '💰' },
        { name: 'Marketing Fundamentals', url: 'https://www.coursera.org/learn/marketing', level: 'Beginner', icon: '📈' },
        { name: 'Finance & Accounting', url: 'https://www.khanacademy.org/economics-finance-domain/core-finance', level: 'Intermediate', icon: '💹' },
        { name: 'Business Strategy', url: 'https://www.coursera.org/learn/business-strategy', level: 'Advanced', icon: '📊' },
      ]
    },
    {
      category: 'Arts & Humanities',
      courses: [
        { name: 'Art History', url: 'https://www.khanacademy.org/humanities/art-history', level: 'Beginner', icon: '🎨' },
        { name: 'Philosophy', url: 'https://www.coursera.org/learn/philosophy', level: 'Beginner', icon: '💭' },
        { name: 'World History', url: 'https://www.khanacademy.org/humanities/world-history', level: 'Beginner', icon: '🌍' },
        { name: 'Music Theory', url: 'https://www.musictheory.net/', level: 'Beginner', icon: '🎵' },
      ]
    },
  ];

  const categories = ['all', ...courses.map(c => c.category)];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '20px 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            margin: 0,
            color: '#333',
            fontSize: 'clamp(24px, 5vw, 36px)',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            📚 Student Learning Portal
          </h1>
          <p style={{
            margin: '10px 0 0 0',
            color: '#666',
            textAlign: 'center',
            fontSize: 'clamp(14px, 2.5vw, 18px)'
          }}>
            Your Gateway to Knowledge - Explore, Learn, Succeed
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        {/* Category Filter */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '30px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ margin: '0 0 15px 0', color: '#333', fontSize: '20px' }}>Filter by Category</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '25px',
                  background: activeCategory === category
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : '#f0f0f0',
                  color: activeCategory === category ? 'white' : '#333',
                  cursor: 'pointer',
                  fontSize: 'clamp(12px, 2vw, 16px)',
                  fontWeight: activeCategory === category ? 'bold' : 'normal',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === category
                    ? '0 4px 10px rgba(102, 126, 234, 0.4)'
                    : 'none',
                  textTransform: 'capitalize'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    e.target.style.background = '#e0e0e0';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    e.target.style.background = '#f0f0f0';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Categories */}
        {filteredCourses.map((categoryData, idx) => (
          <div key={idx} style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            marginBottom: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              margin: '0 0 20px 0',
              color: '#333',
              fontSize: 'clamp(20px, 3vw, 28px)',
              borderBottom: '3px solid #667eea',
              paddingBottom: '10px'
            }}>
              {categoryData.category}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {categoryData.courses.map((course, courseIdx) => (
                <a
                  key={courseIdx}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                    e.currentTarget.style.borderColor = '#667eea';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div style={{
                    fontSize: '40px',
                    marginBottom: '10px',
                    textAlign: 'center'
                  }}>
                    {course.icon}
                  </div>
                  <h3 style={{
                    margin: '0 0 10px 0',
                    color: '#333',
                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                    textAlign: 'center'
                  }}>
                    {course.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 'auto'
                  }}>
                    <span style={{
                      padding: '5px 15px',
                      borderRadius: '15px',
                      background: course.level === 'Beginner' ? '#4CAF50' :
                                course.level === 'Intermediate' ? '#FF9800' : '#F44336',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {course.level}
                    </span>
                  </div>
                  <div style={{
                    marginTop: '15px',
                    padding: '10px',
                    background: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      color: '#667eea',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}>
                      Click to Start Learning →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Links Section */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          marginTop: '30px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            margin: '0 0 20px 0',
            color: '#333',
            fontSize: 'clamp(20px, 3vw, 28px)'
          }}>
            🔗 Additional Learning Resources
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {[
              { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/', icon: '🎓' },
              { name: 'edX', url: 'https://www.edx.org/', icon: '📖' },
              { name: 'Udacity', url: 'https://www.udacity.com/', icon: '💻' },
              { name: 'Codecademy', url: 'https://www.codecademy.com/', icon: '👨‍💻' },
              { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', icon: '💼' },
              { name: 'YouTube EDU', url: 'https://www.youtube.com/education', icon: '📺' },
            ].map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  padding: '15px',
                  background: '#f5f7fa',
                  borderRadius: '10px',
                  textAlign: 'center',
                  color: '#333',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f5f7fa';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{ fontSize: '30px', marginBottom: '5px' }}>{resource.icon}</div>
                <strong>{resource.name}</strong>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '20px',
        marginTop: '40px',
        textAlign: 'center',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}>
        <p style={{
          margin: '0',
          color: '#666',
          fontSize: 'clamp(12px, 2vw, 16px)'
        }}>
          © 2025 Student Learning Portal | Empowering Students Worldwide 🌟
        </p>
        <p style={{
          margin: '10px 0 0 0',
          color: '#888',
          fontSize: 'clamp(11px, 1.8vw, 14px)'
        }}>
          All course links lead to verified educational platforms
        </p>
      </footer>
    </div>
  );
}
