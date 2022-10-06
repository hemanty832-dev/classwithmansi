import React,{ useState } from 'react'
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

export default function Dropdown(props) {
  const [optionvalue,SetOptionValue] = useState({optionSelected: null});
  const Option = (optionsprops) => {
    return (
      <div>
        <components.Option {...optionsprops}>
          <input
           type = {props.isMulti === false ? "radio" : "checkbox"}
            checked={optionsprops.isSelected}
            onChange={() => null}
          />{" "}
          <label>{optionsprops.label}</label>
        </components.Option>
      </div>
    );
  };

  const handleChange = (selected) => {
    props.onChange(selected);
  };
  const prop = props.dropdowntype;
  return (
    <div>
        <ReactSelect
          options={props.options}
          isMulti={props.isMulti}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={handleChange}
          allowSelectAll={true}
          value={optionvalue.optionSelected}
        />
    </div>
  )
}
