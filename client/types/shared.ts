export enum INPUT_TYPES {
  PASSWORD = "password",
  EMAIL = "email",
  TEXT = "text",
  NUMBER = "number",
  TEL = "tel",
}

export interface InputProps {
  children?: React.ReactNode;
  type: INPUT_TYPES;
  value?: string | number;
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  error: string | undefined;
  disabled?: boolean;
  readOnly?: boolean;
  width?: string;
  required?: boolean;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  switchType?: boolean;
  isFocused?: boolean;
  maxLength?: number;
  hide?: boolean;
  inputClassName?: string;
  height?: string;
}
