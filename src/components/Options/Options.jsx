const Options = ({ handleDataClick, handleReset, totalFeedback }) => {
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
      {totalFeedback > 0 ? (
        <button type='button' onClick={() => handleReset()}>
          Reset
        </button>
      ) : (
        " "
      )}
    </div>
  );
};
export default Options;
