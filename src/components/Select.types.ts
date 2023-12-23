import { NoticeProps, StylesConfig } from 'react-select';

export interface SelectProps {
  options: Array<any>;
  placeholder?: string;
  isMulti: boolean;
  className?: string;
  isDisabled?: boolean;
  onChangeSelect?: (event: any) => void;
  defaultValue?: Array<any>;
  allSelectedPlaceholder?: string;
  selectAllText?: string;
  numberDisplayed?: number;
  allowSelectAll?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  name?: string;
  noOptionsMessage?: string;
  displayExpr: string;
  valueExpr: string;
  maxMenuHeight?: number;
  customStyles?: StylesConfig<any, boolean, any>;
}

export interface NoOptionsMessageProps extends NoticeProps<any, boolean, any> {}
