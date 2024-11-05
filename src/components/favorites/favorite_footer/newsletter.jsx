import React from 'react';

const Newsletter = () => {
  return (
    <div style={{ margin: '10px 0' }}>
      <p style={{ margin: '5px 0' }}>Sign up for our newsletter!</p>
      <input
        type="email"
        placeholder="Your email"
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button style={{ padding: '5px 10px' }}>Subscribe</button>
    </div>
  );
};

export default Newsletter;
