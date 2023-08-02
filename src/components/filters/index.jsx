import { MonthPicker } from 'components/buttons';
import { getLastMonth, getLastYear, getThisYear, thisMonth } from 'services/dates';
import './filters.scss'
import { useTranslation } from 'react-i18next';

const Filters = ({ staticDate, setStaticDate, month, setMonth }) => {
  const {t} = useTranslation()
  let filters = [
    { name: t("O’tgan Oy"), val: getLastMonth() },
    { name: t("Hozirgi oy"), val: thisMonth() },
    { name: t("O’tgan yil"), val: getLastYear() },
    { name: t("Hozirgi yil"), val: getThisYear() },
  ];
  function choose(e) {
    setStaticDate(e);
    setMonth(null);
  }
  return (
    <div className="filters">
      {filters.map((item, i) => (
        <button
          key={i}
          onClick={() => choose(item.val)}
          className={
            staticDate == item.val && !month ? `${"btns chosen"}` : "btns"
          }
        >
          {item.name}
        </button>
      ))}
      <MonthPicker {...{ month, setMonth }} />
    </div>
  );
};

export default Filters