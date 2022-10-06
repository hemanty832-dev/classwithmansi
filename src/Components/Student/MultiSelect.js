import React,{useRef} from 'react'
import { default as ReactSelect,components } from "react-select";

export default function MultiSelect(props) {

    const Option = (optionsprops) => {
        return (
          <div>
            <components.Option {...optionsprops}>
              <input
               type = "checkbox"
                checked={optionsprops.isSelected}
                onChange={() => null}
              />{" "}
              <label>{optionsprops.label}</label>
            </components.Option>
          </div>
        );
      };

    const valueRef = useRef(props.value);
    valueRef.current = props.value;

    const selectAllOption = {
        value: "<SELECT_ALL>",
        label: "All"
      };
    
      const isSelectAllSelected = () =>
        valueRef.current.length === props.options.length;
    
      const isOptionSelected = option =>
        valueRef.current.some(({ value }) => value === option.value) ||
        isSelectAllSelected();
    
      const getOptions = () => [selectAllOption, ...props.options];
    
      const getValue = () =>
        isSelectAllSelected() ? [selectAllOption] : props.value;
    
      const onChange = (newValue, actionMeta) => {
        console.log(actionMeta);
        const { action, option, removedValue } = actionMeta;
    
        if (action === "select-option" && option.value === selectAllOption.value) {
          console.log(props.options);
          props.onChange(props.options, actionMeta);
        } else if (
          (action === "deselect-option" &&
            option.value === selectAllOption.value) ||
          (action === "remove-value" &&
            removedValue.value === selectAllOption.value)
        ) {
          props.onChange([], actionMeta);
        } else if (
          actionMeta.action === "deselect-option" &&
          isSelectAllSelected()
        ) {
          props.onChange(
            props.options.filter(({ value }) => value !== option.value),
            actionMeta
          );
        } else {
          props.onChange(newValue || [], actionMeta);
        }
      };
    
  return (
    
       <ReactSelect
      isOptionSelected={isOptionSelected}
      options={getOptions()}
      value={getValue()}
      onChange={onChange}
      components={{
        Option
      }}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      isMulti
    />
  )
}

