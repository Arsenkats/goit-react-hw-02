const Options = ({ handleDataClick, handleReset }) => {
  return (
    <div>
      <button type='button' onClick={() => handleDataClick("good")}>
        Good
      </button>
      <button type='button' onClick={() => handleDataClick("neutral")}>
        Neutral
      </button>
      <button type='button' onClick={() => handleDataClick("bad")}>
        Bad
      </button>
      <button type='button' onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
};
export default Options;
