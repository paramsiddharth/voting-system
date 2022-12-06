import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';

import Statistics from '../components/stats';
import { getElection, toggleVote } from '../services/election';

function Election({ token }) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [processing, setProcessing] = useState(true);
  const navigate = useNavigate();

  async function cast(opt) {
    setProcessing(true);
    const newData = await toggleVote(id, opt, data);
    setData(newData);
    setProcessing(false);
  }

  useEffect(() => {
    if (token == null) {
      return navigate(`/login?redirectTo=${encodeURIComponent('/election/' + id)}`);
    }

    (async () => {
      const receivedData = await getElection(id);
      setData(receivedData);
      setProcessing(false);
    })();
  }, []);

  return <>
    <h2>Election ID {id}</h2>
    {
      data == null 
        ? <FallingLines color='white' />
        : <Statistics processing={processing} setProcessing={setProcessing} cast={cast} data={data} />
    }
  </>;
}

export default Election;