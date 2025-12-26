import React, { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'ABC',
    email: 'abc@gmail.com',
    password: '12',
  },
  {
    id: 2,
    name: 'DEF',
    email: 'def@gmail.com',
    password: '1234',
  },
  {
    id: 3,
    name: 'GHI',
    email: 'ghi@gmail.com',
    password: '123456',
  },
];

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      setError('');
      const user = data.find((item) => item.email === email);
      if (!user) {
        throw new Error('user-error');
      }
      if (user.password !== password) {
        throw new Error('password-error');
      }
      setTimeout(() => {
        console.log(user);
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          id="input-email"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {error === 'user-error' ? (
          <p id="user-error">User not found</p>
        ) : (
          <p id="user-error"></p>
        )}
        <input
          id="input-password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {error === 'password-error' ? (
          <p id="password-error">Password Incorrect</p>
        ) : (
          <p id="password-error"></p>
        )}
        <button id="submit-form-btn">Login</button>
      </form>
    </div>
  );
};

export default App;