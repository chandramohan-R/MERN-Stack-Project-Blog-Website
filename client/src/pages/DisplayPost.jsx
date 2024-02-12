import React, { useState, useEffect } from 'react';
import "./displaypost.css";

function DisplayPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <div className="card-container">
        {posts.map((post, index) => (
          <div key={post._id} className="card-box">
            <div className="card-thumbnail">
              <img
                className="w-full"
                src={post.imageUrl}
                alt={post.title}
                onError={(e) => {
                  console.error('Error loading image:', e);
                }}
              />
            </div>
            <h3>
              <a href="#">{post.title}</a>
            </h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
      
      {/* Pass posts as a prop to the Home component */}
    </div>
  );
}

export default DisplayPosts;
