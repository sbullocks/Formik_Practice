import * as yup from "yup";

//rejex for password validation
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({ //must export so it can be used in the forms. 
    email: yup.string().email("Please enter a valid email").required(),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required("Required"), //passwordRules follows the regex password validation.
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Required"), //ref refers to the original value entered. null if does not match original.
});

export const advancedSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required("Required"),
    jobType: yup
      .string()
      .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
      .required("Required"),
    acceptedTos: yup
      .boolean()
      .oneOf([true], "Please accept the terms of service"),
  });


//Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both.
//Schema are comprised of parsing actions (transforms) as well as assertions (tests) about the input value. Validate an input value to parse it and run the configured set of assertions. Chain together methods to build a schema.

//adding to schemas after updating AdvancedForm.js & CustomInput.js.
//added schemas for advancedSchema.