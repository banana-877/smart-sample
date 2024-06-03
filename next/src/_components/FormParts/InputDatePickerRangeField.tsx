import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputDatePickerField from './InputDatePickerField';

export default function InputDatePickerRangeField({
    dateFormat = 'yyyy-MM-dd',
    fromClassName = '',
    toClassName = '',
    fieldName,
    fieldClassName = '',
    fromFieldName = '',
    toFieldName,
    fromSelected,
    toSelected,
    onFromChange,
    onToChange,
    fromPlaceholder,
    toPlaceholder,
  }: {
    dateFormat: string;
    fromClassName?: string;
    toClassName?: string
    fieldName?: string;
    fieldClassName?: string;
    fromFieldName: string;
    toFieldName: string;
    fromSelected?: string;
    toSelected?: string;
    onFromChange: (date: string) => void;
    onToChange: (date: string) => void;
    fromPlaceholder?: string;
    toPlaceholder?: string;
  }
){
  return (
    <div className="flex items-center">
      <label className={fieldClassName}>{fieldName}</label>
      <div className="bg-white1 border border-gray3 flex focus-within:border-bright-blue1 focus-within:outline-1 focus-within:outline-bright-blue1 items-center justify-center rounded-md shadow-sm flex-1">
        <InputDatePickerField
          className={`bg-white1 border-none focus-visible:outline-0 text-center w-24 ${fromClassName}`}
          dateFormat={dateFormat}
          name={fromFieldName}
          onChange={onFromChange}
          placeholder={fromPlaceholder}
          selected={fromSelected}
        />
        〜
        <InputDatePickerField
          className={`bg-white1 border-none focus-visible:outline-0 text-center w-24 ${toClassName}`}
          dateFormat={dateFormat}
          name={toFieldName}
          onChange={onToChange}
          placeholder={toPlaceholder}
          selected={toSelected}
        />
      </div>
    </div>
  );
};
