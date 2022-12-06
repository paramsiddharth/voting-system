import { useRouteError } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();
  console.error(error);

  return <>
    <h2>404 - Not Found!</h2>
  </>;
}

export default NotFound;