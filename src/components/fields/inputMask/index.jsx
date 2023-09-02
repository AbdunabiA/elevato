/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import InputMask from "react-input-mask";
import './input.scss'

const CustomInputMask = ({
  label,
  wrapperClassName,
  mask,
  placeholder,
  field: { value, name },
  form: { setFieldValue, setFieldTouched, errors, touched },
  disabled = false,
  onClick = () => {},
  // defaultValue,
}) => {
    // console.log(value);
  return (
    <label className={`${wrapperClassName} input-field__wrapper`}>
      {label ? <span className="label">{label}</span> : null}
        <InputMask
          mask={mask}
          onBlur={() => setFieldTouched(name, true)}
          onChange={(e) => setFieldValue(name, e.target.value)}
          name={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          className="custom-input"
        />
        {/* <input
          onBlur={() => setFieldTouched(name, true)}
          name={name}
          type={type}
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          placeholder={placeholder}
          className="custom-input"
          disabled={disabled}
          onClick={onClick}
          // defaultValue={defaultValue ? defaultValue : ""}
        /> */}
      {touched[name] && errors[name] ? (
        <span className="error">{errors[name]}</span>
      ) : null}
    </label>
  );
};

export default CustomInputMask;
