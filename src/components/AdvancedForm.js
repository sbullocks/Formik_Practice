// const AdvancedForm = () => {
//   return (
//     <form autoComplete="off">
//       <label htmlFor="username">Username</label>
//       <input id="username" type="text" placeholder="Enter your username" />
//     </form>
//   );
// };

import React from 'react';
import { Formik } from 'formik';

const AdvancedForm = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: 'jared' }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);
export default AdvancedForm;


//NOTES: 
//this form uses formik components.
//<Formik> is a component that helps you with building forms. It uses a render props pattern made popular by libraries like React Motion and React Router.
//Have access to all the things that the formik() has. All accessiable through props. ex: value={props.values.name}
//
//
//
//
//