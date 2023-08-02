import { BarChart } from "components/charts";
import { useNavigate } from "react-router-dom";
import './branchesSalesCirculation.scss'
import moment from "moment";

const BranchesSalesCirculation = ({data}) => {
  
    const branches = Object.keys(data).reduce((prev,curr)=>{
      return [
        ...prev,
        {
          [curr]: {
            dat: Object.keys(data[curr].sales_by_date).reduce((total, cur) => {
              return {
                ...total,
                [moment(cur).format("YYYY/MM/DD/HH:mm")]: data[curr]
                  .sales_by_date[cur],
              };
            }, {}),
            id: data[curr].warehouse.id,
          },
        },
      ];
    },[])

    const navigate = useNavigate()
  return (
    <div className="branches-sales-circulation">
      <h1 className="title">Fililallar savdo aylanmalari (uzs)</h1>
      <div className="charts">
        {
          branches.map((el, i)=>{
            return (
              <BarChart
                title={Object.keys(el)[0]}
                hasButton
                key={i}
                subtitle={
                  "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
                }
                textBottom={
                  "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
                }
                infos={el[Object.keys(el)[0]].dat}
                onClick={() => navigate(`/branch/${el[Object.keys(el)[0]].id}`)}
              />
            );
          })
        }
        
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
}

export default BranchesSalesCirculation