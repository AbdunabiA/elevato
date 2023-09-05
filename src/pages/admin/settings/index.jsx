import ErrorPage from "components/errorPage"
import Loader from "components/loader"
import { GetAll } from "modules"


const AdminSettings = () => {
  return (
    <div className="container">
      <GetAll
        queryKey={['admin-settings']}
        url={'/admin-bonuses-settings/'}
      >
        {
          ({items, isLoading, isError, error})=>{
            if(isLoading) return <Loader/>
            if(isError) return <ErrorPage/>
            console.log(items);
            return (
              <div></div>
            )
          }
        }
      </GetAll>
    </div>
  )
}

export default AdminSettings