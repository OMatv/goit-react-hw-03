import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}
