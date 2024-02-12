// CreatePost.js
import React, { useState } from 'react';
import "./createpost.css"

function CreatePost() {
  const [post, setPost] = useState({ title: '', description: '', imageUrl: '' });

  const handleInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        // Handle successful post creation
        console.log('Post created successfully!');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='h-100 w-100'>
    <div className="max-w-2xl mx-auto mt-5 p-4  bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Create Post</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            value={post.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={post.imageUrl}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default CreatePost;
