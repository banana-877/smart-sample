import React from "react";

export default function   InputTextField({
  fieldName,
  fieldClassName = "",
  id,
  name,
  className = "",
  value,
  placeholder,
  autoComplete,
  onChange,
  onFocus,
  onBlur,
  onCompositionStart,
  onCompositionEnd,
  disabled = false,
}: {
  fieldName: string;
  fieldClassName?: string;
  id: string;
  name: string;
  className?: string;
  value: string | number | readonly string[] | undefined;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <>
      <label htmlFor={id} className={`pr-4 ${fieldClassName}`}>{fieldName}</label>
      <input
        id={id}
        type="text"
        name={name}
        // サイズやマージン調整したい時はclassNameを渡す
        className={
          `border border-gray2 rounded-md py-2 px-3 ${disabled ? 'font-bold bg-gray-100' : ''} ${className}
        `}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        disabled={disabled}
      />
    </>
  );
}
