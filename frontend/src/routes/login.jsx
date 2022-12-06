import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ token, setToken }) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const handler = () => {
    if (token != null) {
      navigate('/');
    }
  };

  useEffect(handler, []);
  useEffect(handler, [token]);

  async function login() {
    setToken('<token>');
  }

  return <>
    <h2>Login</h2>
    <div className='input-field'>
      <label>
        E-mail:{' '}
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} style={{ width: '34ex' }} />
      </label>
    </div>
    <div className='input-field'>
      <label>
        Password:{' '}
        <input type='password' value={pwd} onChange={e => setPwd(e.target.value)} style={{ width: '30ex' }} />
      </label>
    </div>
    <div className="input-button">
      <button onClick={login}>Login</button>
    </div>
  </>;
}
  
export default Login;