import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SignUp({ token, setToken }) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [params, _] = useSearchParams({ redirectTo: '/' });

  const redirectTo = params.get('redirectTo');

  const handler = () => {
    if (token != null) {
      navigate(redirectTo);
    }
  };

  useEffect(handler, []);
  useEffect(handler, [token]);

  async function signUp() {
    setToken('<token>');
    navigate(redirectTo);
  }

  return <>
    <h2>Sign Up</h2>
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
      <button onClick={signUp}>Register</button>
    </div>
  </>;
}

export default SignUp;