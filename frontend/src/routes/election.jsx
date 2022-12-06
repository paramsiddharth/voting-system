import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';

import Statistics from '../components/stats';
import { useEffect } from 'react';

const TIMEOUT = 1_000;

async function getData(id) {
  return {
    id,
    desc: 'Why is Param famous?',
    total: 51,
    options: [
      {
        id: 1,
        desc: 'He isn\'t.',
        count: 45,
        voted: false
      },
      {
        id: 2,
        desc: 'Because he\'s awesome!',
        count: 6,
        voted: true
      }
    ]
  };
}

function Election({ token }) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  async function cast(opt) {
    let total = 0;

    const newData = {
      ...data,
      options: data.options.map(o => {
        if (o.id === opt) {
          if (o.voted) {
            total += o.count - 1;
            return {
              ...o,
              voted: false,
              count: o.count - 1
            };
          } else {
            total += o.count + 1;
            return {
              ...o,
              voted: true,
              count: o.count + 1
            };
          }
        }
        total += o.voted ? o.count - 1 : o.count;
        return {
          ...o,
          voted: false,
          count: o.voted ? o.count - 1 : o.count
        };
      })
    };

    newData.total = total;

    setTimeout(() => setData(newData), TIMEOUT);
  }

  useEffect(() => {
    if (token == null) {
      return navigate(`/login?redirectTo=${encodeURIComponent('/election/' + id)}`);
    }

    setTimeout(async () => {
      const receivedData = await getData();
      setData(receivedData);
    }, TIMEOUT);
  }, []);

  return <>
    <h2>Election ID {id}</h2>
    {
      data == null 
        ? <FallingLines color='white' />
        : <Statistics cast={cast} data={data} />
    }
  </>;
}

export default Election;