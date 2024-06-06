import React from 'react';

export const InputRadioField = ({
  fieldName,
  fieldClassName = 'w-[7em] mr-2',
  id,
  name,
  className,
  options,
  value,
  onChange,
  disabled = false,
}: {
  fieldName: string;
  fieldClassName?: string;
  id: string;
  name: string;
  className?: string;
  options: Array<{ label: string; value: string | number }>;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) => {
  // サイズやマージン調整したい時はclassNameを渡す
  const radioFieldClassName = `flex items-center border border-gray2 p-2 ${className || 'w-48'}`;

  return (
    <div className="flex items-center">
      <label htmlFor={id} className={fieldClassName}>
        {fieldName}
      </label>
      <div className="flex items-center">
        {options.map(option => (
          <label key={option.value} htmlFor={`${id}-${option.value}`} className="mx-2">
            <div className={`${radioFieldClassName} ${disabled ? 'font-bold bg-gray-100' : 'bg-white1'}`}>
              <input
                id={`${id}-${option.value}`}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                disabled={disabled}
              />
              <label htmlFor={`${id}-${option.value}`} className="ml-6">
                {option.label}
              </label>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};