// app/admin/page.tsx
'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Scientists Discover New Clean Energy Source', source: 'BBC', score: 95 },
    { id: 2, title: 'Animal Species Recovery Celebrates Major Milestone', source: 'Reuters', score: 92 },
    { id: 3, title: 'New Medicine Approved for Rare Disease', source: 'CNN', score: 88 },
  ]);

  const [rssUrl, setRssUrl] = useState('');

  const handleAddRss = (e) => {
    e.preventDefault();
    if (rssUrl) {
      alert('RSS source added: ' + rssUrl);
      setRssUrl('');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header */}
      <header style={{
        background: '#333',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Good News Admin Panel</h1>
        <a href="/" style={{
          color: 'white',
          textDecoration: 'none',
          padding: '10px 20px',
          background: '#667eea',
          borderRadius: '5px'
        }}>
          ← Back to Home
        </a>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Dashboard Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#667eea' }}>Total Articles</h3>
            <p style={{ margin: 0, fontSize: '2em', fontWeight: 'bold' }}>12</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#764ba2' }}>RSS Sources</h3>
            <p style={{ margin: 0, fontSize: '2em', fontWeight: 'bold' }}>3</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#764ba2' }}>Published</h3>
            <p style={{ margin: 0, fontSize: '2em', fontWeight: 'bold' }}>8</p>
          </div>
        </div>

        {/* Add RSS Form */}
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginBottom: '40px'
        }}>
          <h2 style={{ marginTop: 0 }}>📰 Add RSS Source</h2>
          <form onSubmit={handleAddRss} style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <input
              type="url"
              placeholder="Enter RSS feed URL..."
              value={rssUrl}
              onChange={(e) => setRssUrl(e.target.value)}
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1em'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 30px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Add Source
            </button>
          </form>

          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '5px', fontSize: '0.9em' }}>
            <strong>Example RSS feeds:</strong><br/>
            • https://feeds.bbci.co.uk/news/rss.xml<br/>
            • https://feeds.reuters.com/reuters/scienceNews<br/>
            • https://feeds.arstechnica.com/arstechnica/index
          </div>
        </div>

        {/* Articles List */}
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginTop: 0 }}>📄 Recent Articles</h2>
          
          {articles.map((article) => (
            <div key={article.id} style={{
              padding: '20px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>{article.title}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>Source: {article.source}</p>
              </div>
              <div style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}>
                <div style={{
                  background: article.score > 90 ? '#4CAF50' : '#FFC107',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontWeight: 'bold'
                }}>
                  {article.score}%
                </div>
                <button style={{
                  padding: '8px 15px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>
                  Publish
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
        <p>© 2026 Good News Admin Panel</p>
      </footer>
    </div>
  );
}
