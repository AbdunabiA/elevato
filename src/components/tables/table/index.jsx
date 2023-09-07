import './table.scss'
import qs from "qs";
import { useLocation, useNavigate } from 'react-router-dom';
import left from 'assets/icons/PaginationArrowLeft.png'
import React, { useEffect, useState } from 'react';
import { get } from 'lodash';



export default function  Table({ columns, data, hasPagination=false }) {
      const navigate = useNavigate();
      const location = useLocation();
      const params = qs.parse(location.search, { ignoreQueryPrefix: true });
      const [page, setPage] = useState(+get(params, "page", 1));
      const [perPage, setPerPage] = useState(() => {
        +get(params, "perPage", 5);
      });
      const total = data?.length;
      const pagesAmount = Math.ceil(total / perPage);
      const handlePageChange = (val) => {
        if (page > 1 && val < 0) {
          navigate({ search: qs.stringify({ ...params, page: page + val }) });
        }
        if (page < pagesAmount && val > 0) {
          navigate({ search: qs.stringify({ ...params, page: page + val }) });
        }
      };
      const perPageChange = (e) => {
        if (page < pagesAmount || page > 1 || perPage > +e.target.value) {
          navigate({
            search: qs.stringify({ ...params, perPage: +e.target.value }),
          });
          if (+e.target.value > total) {
            navigate({
              search: qs.stringify({
                ...params,
                page: 1,
                perPage: +e.target.value,
              }),
            });
          }
        }
      };
      useEffect(() => {
        setPage(+get(params, "page", 1));
        setPerPage(+get(params, "perPage", 5));
      }, [params.page, params.perPage]);

      const from = page * perPage - perPage;
      const to = page * perPage;
      const paginatedData = hasPagination ? data?.slice(from, to) : data
    return (
      <div>
        <div className={"table__wrapper"}>
          <table className="table1">
            <thead>
              <tr>
                {columns?.map((elem, i) => (
                  <td key={i}> {elem.title}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((item, inde) => (
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
        {hasPagination ? (
          <div className="pagination__wrapper">
            <div className="pagination">
              <div
                className="icon__wrapper"
                onClick={() => handlePageChange(-1)}
              >
                <img src={left} alt="icon" />
              </div>
              <p>{`${page}/${pagesAmount}`}</p>
              <div
                className="icon__wrapper"
                onClick={() => handlePageChange(1)}
              >
                <img src={left} alt="icon" />
              </div>
            </div>
            <div className="perPage">
              <select
                name=""
                id=""
                value={perPage}
                onChange={(e) => perPageChange(e)}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        ) : null}
      </div>
    );
}