import { useMemo } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {format} from 'date-fns';
import ja from 'date-fns/locale/ja';

export default function InputDatePickerField({
    className = '',
    dateFormat = 'yyyy-MM-dd',
    fieldName = '',
    fieldClassName = '',
    name,
    selected = '',
    onChange,
    placeholder = format(new Date(), dateFormat),
    minDate,
    maxDate,
    disabled,
    wrapperClassName,
  }: {
    className?: string;
    dateFormat?: string;
    fieldName?: string;
    fieldClassName?: string;
    name: string;
    selected?: string;
    onChange: (date: string) => void;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    wrapperClassName?: string;
  }
){
  registerLocale('ja', ja.ja);

  /**
   * String型日付をDate型に変換する
   * @param strDate 日付文字列
   * @return {Date}
   */
  const stringToDate = (strDate: string) => {
    if (selected !== '') {
      return new Date(strDate);
    }
  }

  const selectedDate = useMemo(() => stringToDate(selected), [selected]);

  return (
    <div className={`flex items-center ${wrapperClassName}`}>
      <label className={fieldClassName}>{fieldName}</label>
      <DatePicker
        autoComplete='off'
        className={`border-saison-gray2 rounded-md shadow-sm w-full ${disabled ? 'font-bold bg-gray-100' : ''} ${className}`}
        dateFormat={dateFormat}
        locale="ja"
        name={name}
        onChange={(date) => {
          onChange(date ? format(date, 'yyyy-MM-dd') : '');
        }}
        placeholderText={placeholder}
        selected={selectedDate}
        wrapperClassName="flex-1 ml-4"
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
      />
    </div>
  );
};
