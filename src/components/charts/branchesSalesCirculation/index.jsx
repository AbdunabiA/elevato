import { BarChart } from "components/charts";
import { useNavigate } from "react-router-dom";
import "./branchesSalesCirculation.scss";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Button } from "components/buttons";
import { usePost } from "crud";
import { get } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query";

const BranchesSalesCirculation = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  // console.log('data',data);

  const branches = Object.keys(data).reduce((prev, curr) => {
    return [
      ...prev,
      {
        // [curr]: {
          dat: Object.keys(data[curr].sales_by_date).reduce((total, cur) => {
            return {
              ...total,
              [moment(cur).format("YYYY/MM/DD/HH:mm")]: data[curr]
                .sales_by_date[cur],
            };
          }, {}),
          id: data[curr].warehouse.id,
          name:curr,
        // },
      },
    ];
  }, []);
  // console.log('qwerty',branches);

  const {mutate:warehouseDelete, isLoading:deleteLoading} = usePost()

  return (
    <div className="branches-sales-circulation">
      <ToastContainer/>
      <h1 className="title">{t("Fililallar savdo aylanmalari")} ($)</h1>
      <Button text={t("Filial qo'shish")} onClick={() => navigate("add")} />
      <div className="charts">
        {branches.map((el, i) => {
          // console.log(el);
          return (
            <BarChart
              updateButton={() => navigate(`update/${el?.id}`)}
              title={el?.name}
              hasButton
              key={i}
              subtitle={
                "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
              }
              textBottom={
                "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
              }
              infos={el?.dat}
              onClick={() => navigate(`/branch/${el?.id}`)}
              tooltipVal={"$"}
              deleteLoading={deleteLoading}
              deleteButton={()=>{
                warehouseDelete({
                  url:`/admin-warehouses/${el.id}`,
                  method:'delete',
                  onSuccess:()=>{
                    toast.success("DELETED SUCCESSFULLY");
                    queryClient.invalidateQueries("admin-branches")
                  },
                  onError:(error)=>{
                    toast.error(
                      get(error, "response.data.message", error?.message)
                    );
                  }
                })
              }}
            />
          );
        })}

        {/* <BarChart
          title={"Farg'ona"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={infos}
          onClick={() => navigate(`/branch/2`)}
        />
        <BarChart
          title={"Andijon"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={infos}
          onClick={() => navigate(`/branch/3`)}
        />
        <BarChart
          title={"Namangan"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={infos}
          onClick={() => navigate(`/branch/4`)}
        /> */}
      </div>
    </div>
  );
};

export default BranchesSalesCirculation;
