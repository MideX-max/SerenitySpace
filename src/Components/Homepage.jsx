import React, { useState, useEffect, useMemo } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/btter.png';
import { FaGamepad, FaMoon, FaSun, FaUserSecret, FaPalette, FaBars } from 'react-icons/fa';

// Small helper to clamp within viewport
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const Homepage = () => {
  // ---------- THEME SWITCHER ----------
  const themes = [
    { id: 'light', label: 'Light', icon: <FaSun /> },
    { id: 'dark', label: 'Dark', icon: <FaMoon /> },
    { id: 'hacker', label: 'Hacker', icon: <FaUserSecret /> },
    { id: 'sunset', label: 'Sunset', icon: <FaPalette /> },
  ];

  const systemPrefersDark = typeof window !== 'undefined'
    ? window.matchMedia?.('(prefers-color-scheme: dark)').matches
    : false;

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ---------- NAV (mobile) ----------
  const [mobileOpen, setMobileOpen] = useState(false);

  // ---------- NEON GLOW (gamepad) ----------
  const glowColors = useMemo(
    () => [
      'rgba(106, 17, 203, 0.9)', // purple
      'rgba(37, 117, 252, 0.9)', // blue
      'rgba(0, 242, 96, 0.9)',   // green
      'rgba(255, 152, 30, 0.9)', // orange
      'rgba(255, 8, 68, 0.9)',   // pink/red
    ],
    []
  );
  const [glowIndex, setGlowIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setGlowIndex((p) => (p + 1) % glowColors.length), 10000);
    return () => clearInterval(i);
  }, [glowColors.length]);

  // ---------- DRAG / SNAP (gamepad) ----------
  const BTN = { size: 70, padding: 20 };
  const [position, setPosition] = useState({
    x: window.innerWidth - (BTN.size + BTN.padding),
    y: window.innerHeight - (BTN.size + BTN.padding),
  });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDragMouse = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  const startDragTouch = (e) => {
    const t = e.touches[0];
    setDragging(true);
    setOffset({ x: t.clientX - position.x, y: t.clientY - position.y });
  };
  const moveDrag = (clientX, clientY) => {
    if (!dragging) return;
    const x = clamp(clientX - offset.x, BTN.padding, window.innerWidth - BTN.size - BTN.padding);
    const y = clamp(clientY - offset.y, BTN.padding, window.innerHeight - BTN.size - BTN.padding);
    setPosition({ x, y });
  };
  const onMouseMove = (e) => moveDrag(e.clientX, e.clientY);
  const onTouchMove = (e) => moveDrag(e.touches[0].clientX, e.touches[0].clientY);

  const snapToCorner = () => {
    const centerX = position.x + BTN.size / 2;
    const centerY = position.y + BTN.size / 2;
    const targetX = centerX < window.innerWidth / 2
      ? BTN.padding
      : window.innerWidth - BTN.size - BTN.padding;
    const targetY = centerY < window.innerHeight / 2
      ? BTN.padding
      : window.innerHeight - BTN.size - BTN.padding;
    setPosition({ x: targetX, y: targetY });
  };
  const endDrag = () => {
    setDragging(false);
    snapToCorner();
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', endDrag);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', endDrag);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', endDrag);
    };
  }, [dragging]);

  // ---------- SCROLL REVEAL ----------
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal-in');
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ---------- DATA ----------
  const featuredPosts = [
    {
      id: 1,
      title: 'Getting Started with Modern Web Development',
      excerpt:
        'Explore the latest trends and best practices in web development, from React to modern CSS techniques.',
      image:
        'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'Development',
    },
    {
      id: 2,
      title: 'The Art of Minimalist Design',
      excerpt:
        'Discover how less can be more when it comes to creating beautiful and functional user interfaces.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Dec 12, 2024',
      readTime: '3 min read',
      category: 'Design',
    },
    {
      id: 3,
      title: 'Building Scalable Applications',
      excerpt:
        'Learn the principles and patterns that help create applications that can grow with your business needs.',
      image:
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      category: 'Architecture',
    },
  ];

  const categories = [
    { name: 'Development', count: 12, color: '#3B82F6' },
    { name: 'Design', count: 8, color: '#8B5CF6' },
    { name: 'Games', count: 5, color: '#10B981' },
    { name: 'Tutorial', count: 15, color: '#F59E0B' },
  ];

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="nav-brand">
            <img src={logo} alt="Serenity logo" className="logoi" />
            <button
              className="hamburger"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <FaBars />
            </button>
          </div>

          <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link active" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/posts" className="nav-link" onClick={() => setMobileOpen(false)}>
              Posts
            </Link>
            <Link to="/categories" className="nav-link" onClick={() => setMobileOpen(false)}>
              Categories
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setMobileOpen(false)}>
              About
            </Link>
          </nav>

          <div className="header-actions">
            <div className="theme-switch">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`theme-btn ${theme === t.id ? 'active' : ''}`}
                  title={t.label}
                  aria-label={`Switch to ${t.label} theme`}
                  onClick={() => setTheme(t.id)}
                >
                  {t.icon}
                </button>
              ))}
            </div>
            <div className="profile-menu">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile"
                className="profile-avatar"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="heromania reveal">
        <div className="heromania-content">
          <h1 className="hero-title">Welcome to Serenity Space</h1>
          <p className="hero-subtitle">
            Discover insights, tutorials, and stories about web development
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start Reading</button>
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Articles</span>
          </div>
          <div className="stat">
            <span className="stat-number">1.2k</span>
            <span className="stat-label">Readers</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts reveal">
        <div className="container">
          <div className="section-header">
            <h2>Featured Posts</h2>
            <p>Our most popular and recent articles</p>
          </div>
          <div className="posts-grid">
            {featuredPosts.map((post) => (
              <article key={post.id} className="post-card hover-pop">
                <div className="post-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="post-content">
                  <h3 className="post-title link-underline">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section reveal">
        <div className="container">
          <div className="section-header">
            <h2>Browse by Category</h2>
            <p>Find content that interests you most</p>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.name}
                className="category-card hover-pop"
                style={{ '--category-color': category.color }}
              >
                <div className="category-icon" style={{ backgroundColor: category.color }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter reveal">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest posts delivered right to your inbox</p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Subscribed! 🎉'); // quick UX feedback; replace with real handler
              }}
            >
              <input type="email" placeholder="Enter your email address" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <p className="newsletter-disclaimer">No spam, unsubscribe at any time</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer reveal">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Serenity Space</h3>
              <p>A modern blog platform for sharing knowledge and insights.</p>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/posts">All Posts</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Categories</h4>
              <ul className="footer-links">
                <li><Link to="/category/development">Development</Link></li>
                <li><Link to="/category/design">Design</Link></li>
                <li><Link to="/category/tutorial">Tutorial</Link></li>
                <li><Link to="/category/architecture">Games</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Serenity Space. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 🎮 Floating Draggable Gamepad Button */}
      <a
        href="https://idunnogames.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-gamepad-btn"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          background: '#0f172a', // fixed background
          boxShadow: `0 0 20px ${glowColors[glowIndex]}, 0 0 40px ${glowColors[glowIndex]}`,
        }}
        onMouseDown={startDragMouse}
        onTouchStart={startDragTouch}
      >
        <FaGamepad size={28} />
      </a>
    </div>
  );
};

export default Homepage;
