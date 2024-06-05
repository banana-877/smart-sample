import React from 'react';

export const InputCheckBoxField = ({
   name,
   className,
   option,
   checked,
   onChange,
   disabled = false,
 }: {
  name: string;
  className?: string;
  option: { label: string; value: string | number };
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) => {
  // サイズやマージン調整したい時はclassNameを渡す
  const radioFieldClassName = `flex items-center border bg-white border-black rounded-md  ${className || 'w-48 p-2 mr-3'}`;

  return (
    <div className="flex items-center use-custom-checkbox">
      <div className={radioFieldClassName}>
        <input
          id={`${name}-${option.value}`}
          type="checkbox"
          name={name}
          value={option.value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <label htmlFor={`${name}-${option.value}`} className="checkbox ml-1">
          {option.label}
        </label>
      </div>
    </div>
  );
};