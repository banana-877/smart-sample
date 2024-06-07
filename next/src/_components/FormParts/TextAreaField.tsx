import React from "react";

export default function TextAreaField({
  fieldName,
  fieldClassName = 'w-[7em]',
  id,
  name,
  className,
  value,
  placeholder,
  autoComplete,
  onChange,
  onFocus,
  onBlur,
  rows =5, // デフォルトで5行に設定
  disabled = false,
}: {
  fieldName: string;
  fieldClassName?: string;
  id: string;
  name: string;
  className?: string;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  rows?: number;
  disabled?: boolean;
}) {
  return (
    <>
      <label htmlFor={id} className={fieldClassName}>{fieldName}</label>
      <textarea
        id={id}
        name={name}
        className={`border-gray2 rounded-md shadow-sm ${disabled ? 'font-bold bg-gray-100' : ''} ${className || 'flex-1 ml-2'}`}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={rows}
        disabled={disabled}
      />
    </>
  );
}