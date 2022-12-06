import { Link } from 'react-router-dom';

function Header({ token }) {
  return <>
    <Link to='/'>
      <h1>Voting System</h1>
    </Link>
    <nav>
      <Link to='/'>Home</Link>
      &nbsp;
      |
      &nbsp;
      {token}
      {
        token
          ? <Link to='/logout'>Logout</Link>
          : <Link to='/login'>Login</Link>
      }
      &nbsp;
      |
      &nbsp;
      <Link to='/register'>Sign Up</Link>
    </nav>
  </>;
}

export default Header;