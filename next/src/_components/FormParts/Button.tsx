import {PropsWithChildren} from "react";

export const  Button = ({
  label,
  color,
  size = 'M',
  disabled = false,
  className = "",
  onClick,
}: PropsWithChildren<{
  label: string;
  color: string;
  size?: string
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}>) => {
  // ボタンの色はcolorで指定
  const buttonColor = {
    blue: 'bg-blue1 text-white',
    gray: 'bg-gray1 text-white',
    red: 'bg-red1 text-white',
  }[color]
  // ボタンの大きさはsizeで指定
  const buttonSize = {
    S: 'text-sm px-4 py-2',
    M: 'text-base px-6 py-2 w-64 h-12',
  }[size]
  return (
    <button
      type="button"
      className={`
        font-bold rounded-md leading-4 ${buttonSize} ${disabled ? 'bg-gray1' : buttonColor} ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
