import React from 'react';
import './table.scss'
import qs from "qs";
import { useLocation, useNavigate } from 'react-router-dom';
import left from 'assets/icons/PaginationArrowLeft.png'



export default function  Table({ columns, data, total, current=1, perPage=5, hasPagination=false }) {
      const navigate = useNavigate();
      const location = useLocation();
      const params = qs.parse(location.search, { ignoreQueryPrefix: true });
      const pagesAmount = Math.ceil(total / perPage);
      const handlePageChange = (val) => {
        if(current>1&&val<0){
          navigate({search: qs.stringify({...params, page:current+val})})
        }
        if (current < pagesAmount && val > 0) {
          navigate({
            search: qs.stringify({ ...params, page: current + val }),
          });
        }
      }
      const perPageChange = (e)=>{
        navigate({
          search: qs.stringify({ ...params, perPage: e.target.value }),
        });
      }
    return (
      <div>
        <div className={"table__wrapper"}>
          <table>
            <thead>
              <tr>
                {columns?.map((elem, i) => (
                  <td key={i}> {elem.title}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, inde) => (
                <tr key={inde}>
                  {columns?.map((elem, index) => (
                    <React.Fragment key={index}>
                      {!elem.render ? (
                        <td> {item[elem.key]}</td>
                      ) : (
                        <td> {elem.render(item[elem.key], item)}</td>
                      )}
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        { hasPagination ? 
          <div className="pagination__wrapper">
          <div className="pagination">
            <div className="icon__wrapper" onClick={() => handlePageChange(-1)}>
              <img src={left} alt="icon" />
            </div>
            <p>{`${current}/${pagesAmount}`}</p>
            <div className="icon__wrapper" onClick={() => handlePageChange(1)}>
              <img src={left} alt="icon" />
            </div>
          </div>
          <div className="perPage">
            <select name="" id="" onChange={(e)=>perPageChange(e)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div> 
        : null
        }
      </div>
    );
}