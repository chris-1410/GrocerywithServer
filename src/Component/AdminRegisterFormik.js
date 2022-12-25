import React from "react";
import { useFormik } from "formik";
import "../Styles/AdminRegisterFormik.css";

const validate = (values) => {
  const errors = {};
  // Email Validation
  if (!values.email) {
    errors.email = "Required*";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  // Password Validation
  if (!values.password) {
    errors.password = "Required*";
  } else if (values.password.length > 10) {
    errors.password = "* Maximum 10 characters";
  } else if (values.password.length < 4) {
    errors.password = "* Minimum 8 characters";
  }
  return errors;
};

function AdminRegisterFormik() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      MobileNo: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(`Hello !, You Successfully Signed`);
    },
  });
  console.log(formik.values);
  return (
    <div className="main">
      <div className="SignUp-form">
        <h2>Admin Registration</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.Name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <span>{formik.errors.Name}</span>
          ) : null}
          <label>MobileNo</label>
          <input
            type="number"
            id="mobileno"
            placeholder="MobileNo"
            onChange={formik.handleChange}
            value={formik.values.MobileNo}
            onBlur={formik.handleBlur}
          />
          {formik.touched.MobileNo && formik.errors.MobileNo ? (
            <span>{formik.errors.MobileNo}</span>
          ) : null}
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
export default AdminRegisterFormik;
