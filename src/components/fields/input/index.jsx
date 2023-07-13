import './input.scss'

const Input = ({
  label,
  type='text',
  wrapperClassName,
  placeholder,
  field: { value, name },
  form: { setFieldValue, setFieldTouched, errors, touched },
}) => {
  return (
    <label className={`${wrapperClassName} input-field__wrapper`}>
      {label ? <span className="label">{label}</span> : null}
      <input
        onBlur={() => setFieldTouched(name, true)}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        className='custom-input'
      />
      {touched[name] && errors[name] ? (
        <span className="error">{errors[name]}</span>
      ) : null}
    </label>
  );
};

export default Input