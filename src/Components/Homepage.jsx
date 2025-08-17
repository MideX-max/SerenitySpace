import React from 'react'

const Homepage = () => {
  return (
    <div>
      
    </div>
  )
}

export default Homepage


// import React from 'react'
// import './Homepage.css'
// import { Link } from 'react-router-dom';

// const Homepage = () => {
//   const featuredPosts = [
//     {
//       id: 1,
//       title: "Getting Started with Modern Web Development",
//       excerpt: "Explore the latest trends and best practices in web development, from React to modern CSS techniques.",
//       image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
//       date: "Dec 15, 2024",
//       readTime: "5 min read",
//       category: "Development"
//     },
//     {
//       id: 2,
//       title: "The Art of Minimalist Design",
//       excerpt: "Discover how less can be more when it comes to creating beautiful and functional user interfaces.",
//       image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
//       date: "Dec 12, 2024",
//       readTime: "3 min read",
//       category: "Design"
//     },
//     {
//       id: 3,
//       title: "Building Scalable Applications",
//       excerpt: "Learn the principles and patterns that help create applications that can grow with your business needs.",
//       image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
//       date: "Dec 10, 2024",
//       readTime: "7 min read",
//       category: "Architecture"
//     }
//   ];

//   const categories = [
//     { name: "Development", count: 12, color: "#3B82F6" },
//     { name: "Design", count: 8, color: "#8B5CF6" },
//     { name: "Architecture", count: 5, color: "#10B981" },
//     { name: "Tutorial", count: 15, color: "#F59E0B" }
//   ];

//   return (
//     <div className="homepage">
//       {/* Header */}
//       <header className="header">
//         <div className="header-container">
//           <div className="nav-brand">
//             <h1>Blogbase</h1>
//           </div>
//           <nav className="nav-menu">
//             <Link to="/" className="nav-link active">Home</Link>
//             <Link to="/posts" className="nav-link">Posts</Link>
//             <Link to="/categories" className="nav-link">Categories</Link>
//             <Link to="/about" className="nav-link">About</Link>
//           </nav>
//           <div className="header-actions">
//             <button className="search-btn">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.35-4.35"></path>
//               </svg>
//             </button>
//             <div className="profile-menu">
//               <img 
//                 src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100" 
//                 alt="Profile" 
//                 className="profile-avatar"
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1 className="hero-title">Welcome to Blogbase</h1>
//           <p className="hero-subtitle">
//             Discover insights, tutorials, and stories about web development, design, and technology
//           </p>
//           <div className="hero-actions">
//             <button className="btn btn-primary">Start Reading</button>
//             <button className="btn btn-secondary">Subscribe</button>
//           </div>
//         </div>
//         <div className="hero-stats">
//           <div className="stat">
//             <span className="stat-number">50+</span>
//             <span className="stat-label">Articles</span>
//           </div>
//           <div className="stat">
//             <span className="stat-number">1.2k</span>
//             <span className="stat-label">Readers</span>
//           </div>
//           <div className="stat">
//             <span className="stat-number">4.8</span>
//             <span className="stat-label">Rating</span>
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       <section className="featured-posts">
//         <div className="container">
//           <div className="section-header">
//             <h2>Featured Posts</h2>
//             <p>Our most popular and recent articles</p>
//           </div>
//           <div className="posts-grid">
//             {featuredPosts.map(post => (
//               <article key={post.id} className="post-card">
//                 <div className="post-image">
//                   <img src={post.image} alt={post.title} />
//                   <div className="post-category">{post.category}</div>
//                 </div>
//                 <div className="post-content">
//                   <h3 className="post-title">{post.title}</h3>
//                   <p className="post-excerpt">{post.excerpt}</p>
//                   <div className="post-meta">
//                     <span className="post-date">{post.date}</span>
//                     <span className="post-read-time">{post.readTime}</span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="categories-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Browse by Category</h2>
//             <p>Find content that interests you most</p>
//           </div>
//           <div className="categories-grid">
//             {categories.map(category => (
//               <div key={category.name} className="category-card" style={{'--category-color': category.color}}>
//                 <div className="category-icon" style={{backgroundColor: category.color}}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
//                     <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
//                   </svg>
//                 </div>
//                 <h3 className="category-name">{category.name}</h3>
//                 <p className="category-count">{category.count} articles</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="newsletter">
//         <div className="container">
//           <div className="newsletter-content">
//             <h2>Stay Updated</h2>
//             <p>Get the latest posts delivered right to your inbox</p>
//             <form className="newsletter-form">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email address" 
//                 className="newsletter-input"
//               />
//               <button type="submit" className="newsletter-btn">Subscribe</button>
//             </form>
//             <p className="newsletter-disclaimer">
//               No spam, unsubscribe at any time
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-section">
//               <h3>Blogbase</h3>
//               <p>A modern blog platform for sharing knowledge and insights.</p>
//               <div className="social-links">
//                 <a href="#" className="social-link">Twitter</a>
//                 <a href="#" className="social-link">GitHub</a>
//                 <a href="#" className="social-link">LinkedIn</a>
//               </div>
//             </div>
//             <div className="footer-section">
//               <h4>Quick Links</h4>
//               <ul className="footer-links">
//                 <li><Link to="/posts">All Posts</Link></li>
//                 <li><Link to="/categories">Categories</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//               </ul>
//             </div>
//             <div className="footer-section">
//               <h4>Categories</h4>
//               <ul className="footer-links">
//                 <li><Link to="/category/development">Development</Link></li>
//                 <li><Link to="/category/design">Design</Link></li>
//                 <li><Link to="/category/tutorial">Tutorial</Link></li>
//                 <li><Link to="/category/architecture">Architecture</Link></li>
//               </ul>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>&copy; 2024 Blogbase. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Homepage