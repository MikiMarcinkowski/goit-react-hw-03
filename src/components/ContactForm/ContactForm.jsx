import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onData }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
        .min(3, "Must be 3 characters or more")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      number: Yup.string()
        .matches(/^\d+$/, "Phone number can only contain digits")
        .min(3, "Must be 3 characters or more")
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      onData(values);
      // alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.contactForm}>
      <label htmlFor="name" className={css.formLabel}>
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        pattern="[A-Za-z\s]+" // Akceptuje tylko litery i spacje
        inputMode="text" // Wyświetla klawiaturę tekstową na urządzeniach mobilnych
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={css.formInput}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={css.formError}>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number" className={css.formLabel}>
        Number
      </label>
      <input
        id="number"
        name="number"
        type="tel"
        pattern="\d+" // Akceptuje tylko cyfry
        inputMode="tel" // Wyświetla klawiaturę numeryczną na urządzeniach mobilnych
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
        className={css.formInput}
      />
      {formik.touched.number && formik.errors.number ? (
        <div className={css.formError}>{formik.errors.number}</div>
      ) : null}

      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onData: PropTypes.func.isRequired,
};
