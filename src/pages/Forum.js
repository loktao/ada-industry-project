import React, { useState } from 'react'

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Sarah", text: "Has anyone tried yoga for cramps?" },
    { id: 2, user: "Maria", text: "Looking for recommendations on multivitamins." }
  ]);
  
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newPost) return;

    const postObject = {
      id: posts.length + 1,
      user: "Guest User", 
      text: newPost
    };

    setPosts([...posts, postObject]);
    setNewPost("");
  }

  return (
    <div className="page-container">
      <h2>Community Forum</h2>
      
      <div className="forum-board">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <strong>{post.user}:</strong>
            <p>{post.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="post-form">
        <textarea 
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts or ask a question..."
        />
        <button type="submit" className="btn-secondary">Post Comment</button>
      </form>
    </div>
  )
}

export default Forum