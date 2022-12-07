const SAMPLE = {
  id: 1,
  desc: 'Should we give legal recognition to same-sex adoption?',
  // total: 81,
  options: [
    {
      id: 1,
      desc: 'Yes',
      count: 45,
      voted: true
    },
    {
      id: 2,
      desc: 'No',
      count: 6,
      voted: false
    },
    {
      id: 3,
      desc: 'Don\'t know',
      count: 30,
      voted: false
    }
  ]
};

const TIMEOUT = 1_000;

export async function getElection(id) {
  await new Promise(r => setTimeout(r, TIMEOUT));

  return {
    ...SAMPLE,
    id,
    total: SAMPLE.options.reduce((a, b) => ({ count: a.count + b.count }), { count: 0 }).count
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