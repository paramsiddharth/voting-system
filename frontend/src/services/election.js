const SAMPLE = {
  id: 1,
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

const TIMEOUT = 1_000;

export async function getElection(id) {
  await new Promise(r => setTimeout(r, TIMEOUT));

  return {
    ...SAMPLE,
    id
  };
}

export async function toggleVote(electionID, optionID, data) {
  // const data = SAMPLE;

  let total = 0;

  const newData = {
    ...data,
    options: data.options.map(o => {
      if (o.id === optionID) {
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
    }),
    id: electionID
  };

  newData.total = total;

  await new Promise(r => setTimeout(r, TIMEOUT));

  return newData;
}