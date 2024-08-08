import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div className={s.wrapper}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
