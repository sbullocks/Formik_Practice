import { useFormik } from "formik";

//storing the values we need for the form.
const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik); 
  //the below inputs are tracking the different values.
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={formik.handleBlur} 
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} //validates the form when you click off the field.
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;

//useFormik() is a custom React hook that will return all Formik state and helpers directly.
//Line 15. console.log(formik); to see the form state and different helpers. methods like touched, sumbmitting...