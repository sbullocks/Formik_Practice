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
import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
   await new Promise((resolve) => setTimeout(resolve, 1000)); //need to mimic an API request. Had to add async bc this request is await. 
  actions.resetForm(); //waits one second and then resets the form.
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          {/* <Field type="text" name="name" placeholder="Name" /> */}
          {/* Do not have to pass these in anymore as Formik know that a Form has access to the helper methods.
              <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}

          <button disabled={isSubmitting} type="submit">Submit</button>
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

//Working with CustomInput.js file to implement a custom field (properties).
//*Whatever I define in the state, I must use same properties in the name.

//need to add to schema.
//need to allow advancedSchema to be access. This is done through validationSchema={advancedSchema}.

//tested and app works with AdvancedForm. Moving onto CustomSelect - works just like CustomInput.
//added options for the jobType so the user can select from the dropdown list.
//the options are children of the CustomSelect. these values are defined in the schema.

//tested and app works properly. Moving on to adding a checkbox.
//added checkbox for TOS.

//added onSubmit for when user submits the form.
//props has access to form and form state, including when the form isSubmitting. Changed props to isSubmitting. This will have a visual affect when submitting the form on the submit button.

//tested full application. works :)