import { MonthPicker } from 'components/buttons';
import { getLastMonth, getLastYear, getThisYear, thisMonth } from 'services/dates';
import './filters.scss'

const Filters = ({ staticDate, setStaticDate, month, setMonth }) => {
  let filters = [
    { name: "O’tgan Oy", val: getLastMonth() },
    { name: "Hozirgi oy", val: thisMonth() },
    { name: "O’tgan yil", val: getLastYear() },
    { name: "Hozirgi yil", val: getThisYear() },
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