import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {

    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <p>Chào mừng {username}! Bạn đã đăng nhập thành công.</p>
      ) : (
        <div>
          <p>Đăng nhập:</p>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
}

export default Login;
