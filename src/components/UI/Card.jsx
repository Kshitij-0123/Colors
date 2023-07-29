import "./Card.css";
const Card = (props) => {
  return (
    <li
      className={`Card ${props.activeKey === props.val ? `Card_Active` : ""}`}
      style={{ "--bh": `${props.BG.bh}`, "--ah": `${props.BG.ah}` }}
    >
      {props.children}
    </li>
  );
};
export default Card;
