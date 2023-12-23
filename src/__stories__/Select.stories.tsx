import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from '../components/Select';
import SelectProps from '../components/Select';

export default {
  title: 'Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  placeholder: 'Single Select',
  options: [
    { value: 'Chocolate', key: 1 },
    { value: 'Strawberry', key: 2 },
    { value: 'Vanilla', key: 3 },
    { value: 'Banana', key: 4 },
    { value: 'Lemon', key: 5 },
    { value: 'Potato', key: 6 },
  ],
  defaultValue: { value: 'Potato', key: 6 },
  isClearable: true,
  noOptionsMessage: 'No options',
  allowSelectAll: true,
  displayExpr: 'value',
  valueExpr: 'key',
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  isMulti: true,
  placeholder: 'Multi Select',
  options: [
    { display: '1', key: 'Chocolate' },
    { display: '2', key: 'Strawberry' },
    { display: '3', key: 'Vanilla' },
    { display: '4', key: 'Banana' },
    { display: '5', key: 'Lemon' },
    { display: '6', key: 'Potato' },
  ],
  defaultValue: [
    { display: '4', key: 'Banana' },
    { display: '5', key: 'Lemon' },
    { display: '6', key: 'Potato' },
  ],
  className: 'Select',
  isDisabled: false,
  selectAllText: 'Select All',
  allowSelectAll: true,
  isClearable: true,
  displayExpr: 'key',
  valueExpr: 'display',
  numberDisplayed:2
};
