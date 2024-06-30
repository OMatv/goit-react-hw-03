import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.ContactElement}>
      <div>
        <FaUser />
        {name}
        <br />
        <BsFillTelephoneFill />
        {number}{" "}
      </div>

      <button onClick={() => onDelete(id)} className={css.BtnDelete}>
        Delete
      </button>
    </li>
  );
}
