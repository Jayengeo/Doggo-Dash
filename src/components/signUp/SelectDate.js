import { useField } from "formik";
import DatePicker from "react-datepicker";

const MyDatePicker = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <>
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={value}
        onChange={(date) => setValue(date)}
      />
     {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default MyDatePicker;
