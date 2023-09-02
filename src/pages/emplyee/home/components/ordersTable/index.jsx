import Table from 'components/tables/table';
import './ordersTable.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'components/buttons';
import icon from "assets/icons/ButtonFileIconArrowUp.svg";

const OrdersTables = ({data}) => {
    const {t, i18n} = useTranslation()
    const dataCorrected = data.reduce((total, curr) => {
        return [
          ...total,
          { 
            full_name: `${curr?.user?.first_name} ${curr?.user?.last_name}`, 
            date:curr?.date,
            sum: curr?.amount * curr?.product?.price,
            total:curr?.amount,
            done:curr?.done
          },
        ];
    }, []);
    // console.log(dataCorrected);
  return (
    <Table
      columns={[
        {
          title: t("Ism va Familiya"),
          key:'full_name',
        },
        {
          title:t("Sana"),
          key:"date",
        },
        {
            title:t("Summa"),
            key:"sum",
            render:(value) => `${value}$` 
        },
        {
            title:t('Jami'),
            key:'total',
        },
        {
            title:'',
            render:(value, row)=><Button disabled={row?.done} icon={icon} text={t("Mahsulot sotish")}/>
        }
      ]}
      data={dataCorrected}
      hasPagination
    />
  );
}

export default OrdersTables