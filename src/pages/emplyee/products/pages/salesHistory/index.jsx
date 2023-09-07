import { Button } from 'components/buttons'
import ErrorPage from 'components/errorPage'
import Loader from 'components/loader'
import Table from 'components/tables/table'
import { GetAll } from 'modules'
import moment from 'moment'
import React from 'react'
import { useTranslation } from 'react-i18next'

const EmployeeSalesHistory = () => {
  const {t} = useTranslation()
  return (
    <GetAll
      queryKey={["employee-sales-history"]}
      url={"/employees-products/history/sales/"}
    >
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage {...{ error }} />;
        const dataCorrected = items?.sales_history.reduce((total, curr)=>{
          return [
            ...total,
            {
              amount: curr?.amount,
              date: moment(curr?.dateTime).format('DD/MM/YYYY'),
              sum: curr?.summa * curr?.amount,
              productName: curr?.product?.name,
              warehouse: curr?.warehouse?.name,
            },
          ];
        }, []) 
        console.log(items);
        return (
          <div className="container">
            <div>
              <Table
                data={dataCorrected}
                columns={[
                  {
                    title: t("Sana"),
                    key: "date",
                  },
                  {
                    title: t("Filial"),
                    key: "warehouse",
                  },
                  {
                    title: t("Mahsulot"),
                    key: "productName",
                  },
                  {
                    title: t("Soni"),
                    key: "amount",
                  },
                  {
                    title: t("Summa"),
                    key: "sum",
                    render: (value) => `${value}$`,
                  },
                  // {
                  //   title: t("Batafsil"),
                  //   render: () => <Button text={t("Ko'rish")} />,
                  // },
                ]}
              />
            </div>
          </div>
        );
      }}
    </GetAll>
  );
}

export default EmployeeSalesHistory