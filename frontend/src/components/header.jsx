import { Link } from 'react-router-dom';

function Header() {
  return <>
    <Link to='/'>
      <h1>Voting System</h1>
    </Link>
  </>;
}

export default Header;