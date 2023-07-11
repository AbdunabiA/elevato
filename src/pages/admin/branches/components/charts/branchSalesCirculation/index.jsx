import { BarChart } from 'components/charts'
import React from 'react'

const BranchSalesCirculation = () => {
  const savdo = {
    Du: 6000000,
    Se: 50000000,
    Cho: 110000000,
    Pa: 90000000,
    Ju: 67000000,
    Sha: 60000000,
    Yak: 45000000,
  };

  return (
    <div style={{marginTop:"40px"}}>
      <h1 className="title">Farg'ona savdo aylanmalari</h1>
      <div className="charts">
        <BarChart
          title={"Savdo"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={savdo}
          tooltipVal={"uzs"}
        />
        <BarChart
          title={"Mijozlar maosh grafigi (dona)"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={savdo}
          tooltipVal={"uzs"}
        />
        <BarChart
          title={"Xodimlar maosh grafigi (uzs)"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={savdo}
          tooltipVal={"uzs"}
        />
        <BarChart
          title={"Mahsulot grafigi (dona)"}
          hasButton
          subtitle={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. "
          }
          textBottom={
            "*Lorem ipsum dolor sit amet consectetur. Sit ante curabitur diam lectus laoreet. Integer tellus ullamcorper sed sagittis venenatis."
          }
          infos={savdo}
          tooltipVal={"ta"}
        />
      </div>
    </div>
  );
}

export default BranchSalesCirculation