import React from 'react'

function user({ user }) {
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName || user.email}!</h1>
          {user.displayName && <p>Your username is: {user.displayName}</p>}
          {user.email && <p>your emailAddress is :  {user.email}</p>}
        </div>
      ) : (
        <h1>Welcome to the Home Page!</h1>
      )}
      {/* Your existing home page content goes here */}
    </div>
  )
}

export default user