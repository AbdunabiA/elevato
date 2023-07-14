import './textarea.scss'

const TextArea = ({
  label,
  cols = 30,
  rows = 10,
  wrapperClassName,
  placeholder,
  field: { value, name },
  form: { setFieldValue, setFieldTouched, errors, touched },
}) => {
  return (
    <label className={`${wrapperClassName} input-field__wrapper`}>
      {label ? <p className='label'>{label}</p> : null}
      <textarea
        onBlur={() => setFieldTouched(name, true)}
        name={name}
        cols={cols}
        rows={rows}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        className="custom-textarea"
      ></textarea>
      {touched[name] && errors[name] ? (
        <span className="error">{errors[name]}</span>
      ) : null}
    </label>
  );
};

export default TextArea