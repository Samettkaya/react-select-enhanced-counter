# React Select Enhanced Counter

[![npm version](https://badge.fury.io/js/react-select-enhanced-counter.svg)](https://badge.fury.io/js/react-select-enhanced-counter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React Select package with 'Select All' feature and a counter for displaying the number of selected items beyond a specified limit.

## Installation

Install the package using npm:

```bash
npm install react-select-enhanced-counter
```
Install the package using yarn:
```bash
yarn add react-select-enhanced-counter
```
## Live Example
You can see a live example of this package in action on the [React Select Enhanced Counter Live Example.](https://react-select-enhanced-counter.vercel.app/?path=/story/select--single-select)
## Usage

### Single Select Example

```javascript
<Select
  options= {[
    { value: '1', key: 'Chocolate' },
    { value: '2', key: 'Strawberry' },
    { value: '3', key: 'Vanilla' },
    { value: '4', key: 'Banana' },
    { value: '5', key: 'Lemon' },
    { value: '6', key: 'Potato' },
  ]}
  defaultValue= {{ value: '1', key: 'Chocolate' }}
  displayExpr= {'key'}
  valueExpr= {'value'}
  isClearable= {true}
  noOptionsMessage= {'No options'}
  placeholder= {'Single Select'}
/>
```
### Multi Select Example

```javascript
<Select
  options= {[
    { value: '1', key: 'Chocolate' },
    { value: '2', key: 'Strawberry' },
    { value: '3', key: 'Vanilla' },
    { value: '4', key: 'Banana' },
    { value: '5', key: 'Lemon' },
    { value: '6', key: 'Potato' },
  ]}
  defaultValue= {[
    { value: '4', key: 'Banana' },
    { value: '5', key: 'Lemon' },
    { value: '6', key: 'Potato' },
  ]}
  displayExpr= {'key'}
  valueExpr= {'value'} 
  isMulti={ true}
  isClearable= {true}
  allowSelectAll= {true}
  numberDisplayed={2}
  placeholder= {'Multi Select'}
  selectAllText= {'Select All'}
  noOptionsMessage= {'No options'}
/>
```

## Props

- `options*` (Array<any>): Array of possible options.
- `displayExpr*` (string): Required if supplying an array of objects as options. Used to identify which property on the object is the label.
- `valueExpr*` (string): Required if supplying an array of objects as options. Used to identify which property on the object is the value.
- `placeholder` (string): Default message when no items are selected.
- `isMulti` (boolean): Set to true for a multiselect, defaults to false.
- `className` (string): Add custom class.
- `isDisabled` (boolean): Is the select disabled.
- `onChangeSelect` (event:any) => void: Called whenever selected value(s) have changed.
- `defaultValue` (Array<any>): It selects values by default.
- `isSearchable` (boolean): If set to true, will add an input at the top of the dropdown for filtering the results.
- `allowSelectAll` (boolean): If set to true, will add a Select All checkbox at the top of the list.
- `maxMenuHeight` (number): The height of the dropdown. Defaults to 400px.
- `allSelectedPlaceholder` (string): Default "%s selected" where %s is the number of items selected. This gets used when all options are selected.
- `selectAllText` (string): Default "Select all", use this to override "Select all" text from top of dropdown when included with includeSelectAll.
- `numberDisplayed` (number): The number of selected options displayed until it turns into '(selected count) selected'. Defaults to 4.
- `customStyles` (StylesConfig<any, boolean, any>): Style modifier methods.
- `isLoading` (boolean): Is the select in a state of loading (async).
- `isClearable` (boolean): Is the select value clearable.
- `name` (string): Name of the HTML Input (optional - without this, no input will be rendered).
- `noOptionsMessage` (string): Text to display when there are no options to list.

## Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
