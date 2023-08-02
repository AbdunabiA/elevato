import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uz from "date-fns/locale/uz";
import ru from 'date-fns/locale/ru'
import calendar from "assets/icons/CalendarIcon.png"; 
import { Button } from "..";
import { forwardRef, useRef } from "react";
import './monthPicker.scss'
import { useTranslation } from "react-i18next";

const MonthPicker = ({month, setMonth}) => {
    const {t, i18n} = useTranslation()
    const dateRef = useRef(null);
    registerLocale("uz", uz);
    registerLocale("ru", ru);
    const CustomInput = forwardRef(({ onClick, value }, ref) => {
      return (
        <Button
          text={value ? value : t("Oyni tanlash")}
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
      locale={i18n.language}
      closeOnScroll={true}
      onChange={(date) => setMonth(date)}
      dateFormat="MMMM/yyyy"
      showFullMonthYearPicker
      showMonthYearPicker
      customInput={<CustomInput inputRef={dateRef} />}
    />
  );
};

export default MonthPicker;
