import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    setToken(null);
    return navigate('/');
  });

  return <>
    <h2>Logout</h2>
  </>;
}
  
export default Logout;