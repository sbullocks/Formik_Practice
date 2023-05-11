import { useField } from 'formik';

const CustomInput = ({label, ...props}) => {
    
    const [field, meta] = useField(props);
    console.log("field", field);
    console.log("meta", meta);

    return (
        <>
        <label>{label}</label>
        <input {...field} {...props} 
         className={meta.touched && meta.error ? "input-error" : ""} //css for error validation.
         />
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}

        </>
    );
};
export default CustomInput;



//Returning a label and a input field.
//Destructring label from AdvancedForm.js.
//the spread feature lets you access the props variable which is an objects that gives you all the properties from AdvancedFrom.js - CustomInput.
//<input {...props} /> gives me access to all the properties. Same as last note.
//Currently the label is just plain html and does not know about the Formik or Form, helpers..
//To get access, must use hook.
//useField() - is a custom React hook that will automagically help you hook up inputs to Formik. You can and should use it to build your own custom input primitives. There are 2 ways to use it.

//need to add to schema.
//added css for error validation.
//if its true and there is a error, the css will reflect and a div will display the error.
//
//CustomSelect works just like this form.
