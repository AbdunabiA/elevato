import { useTranslation } from 'react-i18next'
import './treeTable.scss'
import Table from 'components/tables/table'

const TreeTables = ({data}) => {
  const {t} = useTranslation()
  const columns = [
    {
      title: t("Ism"),
      key: "first_name",
    },
    {
      title: t("Familiya"),
      key: "last_name",
    },
    {
      title: t("Telefon raqam"),
      key: "phone_number",
    },
    {
      title: t("Status"),
      key: "status",
    },
    {
      title: t("Izdoshlar"),
      key: "followers_count",
    },
    {
      title: t("Hisob raqamidagi summa"),
      key: "amount",
    },
  ];
  return (
    <div>
      <div className='tree-title__wrapper'>
        <h1 className='title'>{t("Shajara")}</h1>
      </div>
      {
        data.map((el, i)=>{
          return (
            <div key={i} className='tree-table__wrapper'>
              <div className='tree-table-title__wrapper'>
                <h1 className='tree-table-title'>
                  {i + 1}-{t("Avlod")}
                </h1>
              </div>
              <Table data={el} hasPagination columns={columns}/>
            </div>
          );
        })
      }
    </div>
  )
}

export default TreeTables