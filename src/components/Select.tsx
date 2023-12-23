// React common libraries
import React, { useEffect, useState } from 'react';
// 3rd-parties
import {
  components,
  MultiValueProps,
  OptionProps,
  default as ReactSelect,
} from 'react-select';
// Types
import { NoOptionsMessageProps, SelectProps } from './Select.types';
import { getAllOption, isLastSelected } from '../utils';

const Select: React.FC<SelectProps> = ({
  isMulti,
  placeholder,
  defaultValue,
  options,
  className,
  isDisabled,
  onChangeSelect,
  allSelectedPlaceholder,
  selectAllText,
  numberDisplayed,
  allowSelectAll,
  isClearable,
  isLoading,
  isSearchable,
  name,
  noOptionsMessage,
  displayExpr,
  valueExpr,
  maxMenuHeight,
  customStyles,
  ...props
}) => {
  const [value, setValue] = useState<Array<any>>([]);

  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);


  // Çoklu seçmek için hazırlanmış component.
  const MultiValue = (props: MultiValueProps<any>) => {
    const label = props.data[displayExpr];
    const allSelected = props.selectProps.value;
    const index = allSelected.findIndex(
      (multiValue: any) => multiValue[displayExpr] === label
    );
    const count =
      allSelected.length > Number(`${numberDisplayed ? numberDisplayed : 3}`) &&
      allSelected.length;
    const labelSuffix = isLastSelected(index,allSelected,numberDisplayed)
      ? `${
          allSelectedPlaceholder
            ? count + ` ${allSelectedPlaceholder}`
            : count + ' selected'
        }`
      : ' ';
    const val =
      index > Number(`${numberDisplayed ? numberDisplayed : 3}`)
        ? ` `
        : `${labelSuffix}`;
    return (
      <div>
        {numberDisplayed&&(value.length > Number(`${numberDisplayed ? numberDisplayed : 3}`)) ? (
          <span>{val}</span>
        ) : (
          <components.MultiValue {...props} />
        )}
      </div>
    );
  };


  
  // Seçilecek elamanları göstermek içi kullanılır.
  const Option = (props: OptionProps) => {
    return (
      <div>
        <components.Option {...props}>
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  // Veri boş geldiği zaman veri bulunamadı mesajı göstermek için kullanılır.
  const NoOptionsMessage = (props: NoOptionsMessageProps) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">
          {noOptionsMessage ? noOptionsMessage : 'No options'}
        </span>
      </components.NoOptionsMessage>
    );
  };

  // Çoklu seçim özelliği çalışması için kullanılmaktadır.
  if (allowSelectAll && isMulti) {
    return (
      <ReactSelect
        styles={customStyles}
        maxMenuHeight={maxMenuHeight}
        getOptionLabel={option => option[displayExpr]}
        getOptionValue={option => option[valueExpr]}
        {...props}
        name={name}
        components={{
          Option,
          MultiValue,
          NoOptionsMessage,
        }}
        isMulti={isMulti ? isMulti : false}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        closeMenuOnSelect={true}
        hideSelectedOptions={false}
        value={value}
        options={options.length > 0 ? [getAllOption(displayExpr,valueExpr,selectAllText), ...options] : []}
        placeholder={placeholder}
        isDisabled={isDisabled}
        onChange={(selected: Array<any>) => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1][valueExpr] === getAllOption(displayExpr,valueExpr,selectAllText)[valueExpr]
          ) {
            onChangeSelect && onChangeSelect(options);
            return setValue(options);
          }
          onChangeSelect && onChangeSelect(selected);
          return setValue(selected);
        }}
      />
    );
  }

  return (
    <ReactSelect
      styles={customStyles}
      maxMenuHeight={maxMenuHeight}
      getOptionLabel={option => option[displayExpr]}
      getOptionValue={option => option[valueExpr]}
      {...props}
      className="className"
      classNamePrefix="select"
      value={value}
      components={{ Option, MultiValue, NoOptionsMessage }}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      onChange={selected => {
        setValue(selected);
        onChangeSelect && onChangeSelect(selected);
      }}
      placeholder={placeholder}
      name={name}
      options={options}
      isMulti={isMulti}
      closeMenuOnSelect={true}
      hideSelectedOptions={false}
    />
  );
};

export default Select;
