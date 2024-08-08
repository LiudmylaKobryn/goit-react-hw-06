import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <span>
          <FaUser className={s.icon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={s.icon} />
          {number}
        </span>
      </div>
      <button
        className={s.button}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
