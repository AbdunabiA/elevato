import { MonthPicker } from 'components/buttons';
import { getLastMonth, getLastYear, getThisYear, thisMonth } from 'services/dates';
import './filters.scss'

const Filters = ({setFIlter, setDate, filter, date}) => {
    let filters = [
      { name: "O’tgan Oy", val: getLastMonth() },
      { name: "Hozirgi oy", val: thisMonth() },
      { name: "O’tgan yil", val: getLastYear() },
      { name: "Hozirgi yil", val: getThisYear() },
    ];
      function choose(e) {
        setFIlter(e);
        setDate(null);
      }
  return (
    <div className="filters">
      {filters.map((item, i) => (
        <button
          key={i}
          onClick={() => choose(item.val)}
          className={filter == item.val && !date ? `${"btns chosen"}` : "btns"}
        >
          {item.name}
        </button>
      ))}
      <MonthPicker {...{ date, setDate }} />
    </div>
  );
}

export default Filters