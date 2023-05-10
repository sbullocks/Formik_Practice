import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
  console.log("submitted");
};

//storing the values we need for the form.
const BasicForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema, //must import above so it pulls in from index.js. 
    onSubmit, //defined above. Need to validate errors.

    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  console.log(errors);
  // console.log(useFormic); 
  // console.log(values.email); 

  //the below inputs are tracking the different values.
  return (
    //when the form is submitted, onSubmit will call the formik handleSubmit and it will call the onSubmit handler function above.
    <form onSubmit={handleSubmit} autoComplete="off"> 
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur} 
        className={errors.email && touched.email ? "input-error" : ""} //dynimically adding class. checking email for errors. If errors, input error, if error-free then leave empty. added styles to css file. touched is tracking if user is in field or not. now checking if errors and if touched..
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur} //validates the form when you click off the field.
        className={errors.age && touched.age ? "input-error" : ""}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;

//useFormik() is a custom React hook that will return all Formik state and helpers directly.
//Line 26. console.log(formik); to see the form state and different helpers. methods like touched, sumbmitting...
//we can destructor the following so that we do not have to keep rewriting formik.values.x - value={formik.values.age}.
//... on line 5: const formik = useFormik({ .. this is where you destructor and add the properties and methods needed. example: const {values, handleBlur, handleChange} = useFormik({ .
//... now I can remove the many instances of formik. in my <input sections.

//form validation by using Yup library. First must create schema to define the different initialValues properties and the type they should be. 
//