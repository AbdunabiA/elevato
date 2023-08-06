import EmployeeBigCards from '../../components/employeeBigCards';
import { GetAll } from 'modules';
import Loader from 'components/loader';
import ErrorPage from 'components/errorPage';
import { useParams } from 'react-router-dom';

const BranchEmployees = () => {
  const {id} = useParams()
  // console.log(id);
  return (
    <div className="container">
      <GetAll
        queryKey={["admin-branch"]}
        url={`/admin-warehouses/${id}/month/2023-07`}
      >
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage {...{ error }} />;
          console.log(items);
          return (
            <>
              <EmployeeBigCards data={items}/>
            </>
          );
        }}
      </GetAll>
    </div>
  );
}

export default BranchEmployees