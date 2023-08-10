import { BarChart } from 'components/charts'
import './charts.scss'
import { Pie } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import moment from 'moment';


const Charts = ({data}) => {
  const {t} = useTranslation()
  const sales = data?.sales_diagram.reduce((total, curr)=>{
    return {...total, [moment(curr?.date).format('YYYY/MM/DD HH:mm:ss')]:curr?.summa}
  }, {})
  const income = data?.income_diagram.reduce((total, curr) => {
    return {
      ...total,
      [moment(curr?.date).format("YYYY/MM/DD HH:mm:ss")]: curr?.summa,
    };
  }, {});
  return (
    <div className="charts-wrapper">
      <div className="charts">
        <BarChart infos={income} title={t('Daromad grafigi')}/>
        <BarChart infos={sales} tooltipVal={'$'} title={t('Sotuv grafigi')}/>
      </div>
    </div>
  );
}

export default Charts