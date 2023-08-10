import './input.scss'

const Input = ({
  label,
  type = "text",
  wrapperClassName,
  placeholder,
  field: { value, name },
  form: { setFieldValue, setFieldTouched, errors, touched },
  disabled = false,
  // defaultValue,
}) => {
  return (
    <label className={`${wrapperClassName} input-field__wrapper`}>
      {label ? <span className="label">{label}</span> : null}
      <div>
        <input
          onBlur={() => setFieldTouched(name, true)}
          name={name}
          type={type}
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          placeholder={placeholder}
          className="custom-input"
          disabled={disabled}
          // defaultValue={defaultValue ? defaultValue : ""}
        />
      </div>
      {touched[name] && errors[name] ? (
        <span className="error">{errors[name]}</span>
      ) : null}
    </label>
  );
};

export default Input