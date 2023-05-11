import { useField } from 'formik';

const CustomSelect = ({label, ...props}) => {
    
    const [field, meta] = useField(props);
    console.log("field", field);
    console.log("meta", meta);

    return (
        <>
        <label>{label}</label>
        <select {...field} {...props} 
         className={meta.touched && meta.error ? "input-error" : ""} //css for error validation.
         />
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}

        </>
    );
};
export default CustomSelect;


//works just like CustomInput.js file. Rather than a label, its a select.