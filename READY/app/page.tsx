// app/page.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>🌟 Good News</h1>
        <p style={{ margin: 0, fontSize: '1.1em', opacity: 0.9 }}>Positive news from around the world</p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Navigation */}
        <nav style={{ marginBottom: '40px', textAlign: 'center' }}>
          <a href="/" style={{
            display: 'inline-block',
            margin: '0 15px',
            padding: '10px 20px',
            background: '#667eea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>
            Home
          </a>
          <a href="/admin" style={{
            display: 'inline-block',
            margin: '0 15px',
            padding: '10px 20px',
            background: '#764ba2',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>
            Admin
          </a>
        </nav>

        {/* Welcome Message */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2>Welcome to Good News! 🎉</h2>
          <p style={{ fontSize: '1.1em', color: '#666', lineHeight: '1.6' }}>
            This is a positive news aggregation platform. <br/>
            Go to <strong>/admin</strong> to manage your news feed.
          </p>
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {/* Sample Article Cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }}>
              {/* Image placeholder */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, hsl(${i * 60}, 70%, 60%) 0%, hsl(${i * 60 + 30}, 70%, 70%) 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3em'
              }}>
                {['🌍', '🚀', '💡', '🏆', '🌱', '❤️'][i-1]}
              </div>

              {/* Content */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3em' }}>
                  Positive News #{i}
                </h3>
                <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '0.95em' }}>
                  This is a sample article. Your real news will appear here when you add RSS sources.
                </p>
                <button style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '60px'
      }}>
        <p>© 2026 Good News. Spreading positive news worldwide. 🌟</p>
      </footer>
    </div>
  );
}
