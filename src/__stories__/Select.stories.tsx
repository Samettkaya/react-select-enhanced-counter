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
    { value: 'chocolate', key: 1 },
    { value: 'strawberry', key: 2 },
    { value: 'vanilla', key: 3 },
    { value: 'banana', key: 4 },
    { value: 'lemon', key: 5 },
    { value: 'potato', key: 6 },
  ],
  defaultValue: { value: 'potato', key: 6 },
  isClearable: true,
  noOptionsMessage: 'Veri yok',
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
  selectAllText: 'Tümü Seç',
  allowSelectAll: true,
  isClearable: true,
  displayExpr: 'key',
  valueExpr: 'display',
  numberDisplayed:2
};
