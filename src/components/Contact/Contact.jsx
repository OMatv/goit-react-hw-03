import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.ContactElement}>
      <FaUser />
      {name} <BsFillTelephoneFill />
      {number}{" "}
      <button onClick={() => onDelete(id)} className={css.BtnDelete}>
        Delete
      </button>
    </li>
  );
}
