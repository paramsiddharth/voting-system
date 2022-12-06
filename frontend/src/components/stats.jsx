function Statistics({ data, cast }) {
  const {
    desc,
    total,
    options
  } = data;

  function display(d) {
    return d.map(({ id, desc, count, voted }, i) => {
      return <div className='option' key={i}>
        <button
          onClick={() => cast(id)}
          {...{ className: voted ? 'invert' : '' }}>
          { voted ? 'Revoke' : 'Vote' }
        </button>
        <div>
          { desc }:
          {' '}
          {(100 * count / total).toFixed(2)}% ({ count })
          <br />
          <progress value={count} max={total}></progress>
        </div>
      </div>;
    });
  }

  return <div>
    <h3>{ desc }</h3>
    <h4>{ total } votes</h4>
    <div className='options'>
      { display(options) }
    </div>
  </div>;
}

export default Statistics;