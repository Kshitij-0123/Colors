const Input = (props) => {
  const changeHandle = (e) => {
    console.log(e.target.value);
    props.changeColor(e.target.id, e.target.value);
  };
  return (
    <form>
      <input type="color" id={1} on={changeHandle} />
      {/* <input type="color" /> */}
      <input type="number" min={0} max={1} step={0.1} />
    </form>
  );
};
export default Input;
