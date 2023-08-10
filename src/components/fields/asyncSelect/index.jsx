import { get } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AsyncPaginate } from "react-select-async-paginate";
import { api, queryBuilder } from "services";
import './asyncSelect.scss'

const AsyncSelect = ({
  field: { value, name },
  form: { setFieldValue, setFieldTouched, errors, touched },
  label,
  optionLabel,
  optionValue,
  loadOptionsUrl,
  loadOptionsParams = {},
  menuPlacement = "bottom",
  isMulti = false,
  placeholder,
  className,
  disabled = false,
  isSearchable = false,
  searchKey = "",
  onChange = () => {},
  key,
  lastKeys,
}) => {
  const loadOptions = async (search, loadedOptions, { page }) => {
    let data = await api.get(queryBuilder(loadOptionsUrl, loadOptionsParams));
    console.log(data.data);
    return {
      options: search
        ? get(data, `data${lastKeys}`, []).filter((item) =>
            item[searchKey].toLowerCase().includes(search.toLowerCase())
          )
        : get(data, `data${lastKeys ? lastKeys : ''}`, []),
      hasMore: page < get(data, "data.last_page", 1),
      additional: { page: page + 1 },
    };
  };
  
  return (
    <label className={`${className} input-field__wrapper`}>
      {label ? <p className="label">{label}</p> : null}
      <AsyncPaginate
        className="custom-async-select"
        key={key}
        isSearchable={isSearchable}
        isDisabled={disabled}
        name={name}
        defaultValue={value}
        // value={value}
        isMulti={isMulti}
        debounceTimeout={300}
        getOptionLabel={(option) =>
          typeof optionLabel == "function"
            ? optionLabel(option)
            : option[optionLabel]
        }
        getOptionValue={(option) =>
          typeof optionValue == "function"
            ? optionValue(option)
            : option[optionValue]
        }
        loadOptions={loadOptions}
        additional={{ page: 1 }}
        onChange={(option) => {
          onChange(option);
          setFieldValue(name, option);
        }}
        menuPlacement={menuPlacement}
        // onInputChange={(e)=>onChange(e)}
        onBlur={() => setFieldTouched(name, true)}
        placeholder={placeholder}
      />
      {touched[name] && errors[name] && (
        <span className="error">{errors[name]}</span>
      )}
    </label>
  );
};

export default AsyncSelect;
