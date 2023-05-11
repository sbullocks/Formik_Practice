// const AdvancedForm = () => {
//   return (
//     <form autoComplete="off">
//       <label htmlFor="username">Username</label>
//       <input id="username" type="text" placeholder="Enter your username" />
//     </form>
//   );
// };

// import React from "react";

import { Field, Form, Formik } from "formik";
import CustomInput from "./CustomInput";

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ username: "jared" }}>
      {(props) => (
        <Form>
          <CustomInput 
          label="Username" 
          name="username"
          type="text"
          placeholder="Enter your username"
          />
          {/* <Field type="text" name="name" placeholder="Name" /> */}
          {/* Do not have to pass these in anymore as Formik know that a Form has access to the helper methods.
              <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
      };

export default AdvancedForm;

//NOTES:
//this form uses formik components.
//<Formik> is a component that helps you with building forms. It uses a render props pattern made popular by libraries like React Motion and React Router.
//Have access to all the things that the formik() has. All accessiable through props. ex: value={props.values.name}
//Removed feedback error on line 28.
//<form onSumbit={props.handleSubmit}> renders html form. Changed this to a formik form on line 20: <Form> As a form component it can now pass anything rather than just passing the onSubmit handler to the props.handleSubmit. It will know to run the Formik handle submit method and call the onSubmit. (saves code.)

//Field Components <Field/>
//<Field /> will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. <Field /> will default to an HTML <input /> element.
//Whatever I define in the state, I must use same properties in the name.
//Children can either be an array of elements (e.g. <option> in the case of <Field as="select">) or a callback function (a.k.a render prop). Read more in docs about what objects are contained in the render props.
//Cannot configure with class name and attributes like normal. Rather we can render a Field component with children. Gives me access to different properties. Ex: field, form, meta. Define the input such as class name.
//Created a custom field instead.


//Working with CustomInputs.js file to implement a custom field (properties).
//*Whatever I define in the state, I must use same properties in the name.

//need to add to schema.
