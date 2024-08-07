import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ func }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, actions) => {
    func(data);
    actions.resetForm();
  };

  const userSchema = Yup.object({
    name: Yup.string("this is required field")
      .required()
      .min(3, "write minimum 3 symbols")
      .max(50, "write maximum 50 symbols"),
    number: Yup.string("this is required field")
      .required()
      .min(3, "write minimum 3 symbols")
      .max(50, "write maximum 50 symbols"),
  });
  return (
    <div>
      <Formik
        validationSchema={userSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
