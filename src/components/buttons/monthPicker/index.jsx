import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uz from "date-fns/locale/uz";
import calendar from "assets/icons/CalendarIcon.png"; 
import { Button } from "..";
import { forwardRef, useRef } from "react";
import './monthPicker.scss'

const MonthPicker = ({month, setMonth}) => {
    const dateRef = useRef(null);
    registerLocale("uz", uz);
    const CustomInput = forwardRef(({ onClick, value }, ref) => {
      return (
        <Button
          text={value ? value : "Oraliq tanlash"}
          onClick={onClick}
          bref={ref}
          icon={calendar}
          className={'monthPicker'}
        />
      );
    });
  return (
    <ReactDatePicker
      selected={month}
      locale={"uz"}
      closeOnScroll={true}
      onChange={(date) => setMonth(date)}
      dateFormat="MMMM/yyyy"
      showMonthYearPicker
      customInput={<CustomInput inputRef={dateRef} />}
    />
  );
};

export default MonthPicker;