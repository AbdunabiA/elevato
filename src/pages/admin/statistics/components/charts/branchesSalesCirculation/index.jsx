import { BarChart } from "components/charts";
import { useNavigate } from "react-router-dom";
import './branchesSalesCirculation.scss'

const BranchesSalesCirculation = () => {
    const infos = {
        Du:6000000,
        Se:50000000,
        Cho:110000000,
        Pa:90000000,
        Ju:67000000,
        Sha:60000000,
        Yak:45000000,
    }
    const navigate = useNavigate()
  return (
    <div className="branches-sales-circulation">
      <h1 className="title">Fililallar savdo aylanmalari (uzs)</h1>
      <div className="charts">
        <BarChart
          title={"Qo'qon"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={infos}
          onClick={() => navigate(`/branch/1`)}
        />
        <BarChart
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
        />
      </div>
    </div>
  );
}

export default BranchesSalesCirculation