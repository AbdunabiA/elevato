import { get } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AsyncPaginate } from "react-select-async-paginate";
import { api, queryBuilder } from "services";
import { systemSelectors } from "store/system";

const asyncSelect = ({
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
}) => {
  const loadOptions = async (search, loadedOptions, { page }) => {
    let data = await api.get(queryBuilder(loadOptionsUrl, loadOptionsParams));

    return {
      options: search
        ? get(data, "data.data", []).filter((item) =>
            item[searchKey].toLowerCase().includes(search.toLowerCase())
          )
        : get(data, "data.data", []),
      hasMore: page < get(data, "data.last_page", 1),
      additional: { page: page + 1 },
    };
  };
  // useEffect(() => {
  //   loadOptions()
  // }, [loadOptionsParams?.filter?.region_id]);
  // const styles = {}
  return (
    <div className={className}>
      {label ? <h4>{label}</h4> : null}
      <AsyncPaginate
        key={key}
        isSearchable={isSearchable}
        isDisabled={disabled}
        name={name}
        value={value}
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
        <span className="">
          {errors[name]}
        </span>
      )}
    </div>
  );
};

export default asyncSelect;
