import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { nanoid } from "nanoid";
// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()

    .min(3, "Minimum 3 letters")
    .max(50, "Maximum 50 letters")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Minimum 3 numbers")
    .max(50, "Maximum 50 numbers")
    .required("This field is required"),
});

export default function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="name">Name</label>

            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="number">Number</label>

            <Field className={css.input} type="number" name="number" />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
