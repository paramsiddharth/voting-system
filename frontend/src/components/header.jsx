import { Link, useSearchParams } from 'react-router-dom';

function Header({ token }) {
  // eslint-disable-next-line no-unused-vars
  const [params, _] = useSearchParams();

  const redirectTo = params.get('redirectTo');

  return <>
    <Link to='/'>
      <h1>Voting System</h1>
    </Link>
    <nav>
      <Link to='/'>Home</Link>
      &nbsp;
      |
      &nbsp;
      {
        token
          ? <Link to='/logout'>Logout</Link>
          : <>
            <Link to={`/login${redirectTo == null ? '' : `?redirectTo=${encodeURIComponent(redirectTo)}`}`}>Login</Link>
            &nbsp;
            |
            &nbsp;
            <Link to={`/register${redirectTo == null ? '' : `?redirectTo=${encodeURIComponent(redirectTo)}`}`}>Sign Up</Link>
          </>
      }
    </nav>
  </>;
}

export default Header;