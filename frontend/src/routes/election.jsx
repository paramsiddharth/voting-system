import { useParams } from 'react-router-dom';

function Election() {
  const { id } = useParams();

  return <>
    <h2>Election ID {id}</h2>
  </>;
}
  
export default Election;