import "./table2.scss";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import left from "assets/icons/PaginationArrowLeft.png";
import React, { useEffect, useState } from "react";
import { get } from "lodash";

export default function WhiteRowTable({
  columns,
  data,
  hasPagination = false,
  onRowClick = () => {},
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [page, setPage] = useState(+get(params, 'page', 1));
  const [perPage, setPerPage] = useState(+get(params, 'perPage', 5));
  const total = data.length;
  const pagesAmount = Math.ceil(total / perPage);
  const handlePageChange = (val) => {
    if (page > 1 && val < 0) {
      navigate({ search: qs.stringify({ ...params, page: page + val }) });
      // setPage((prev) => prev + val);
    }
    if (page < pagesAmount && val > 0) {
      navigate({ search: qs.stringify({ ...params, page: page + val }) });
      // setPage((prev) => prev + val);
    }
  };
  const perPageChange = (e) => {
    if (page < pagesAmount || page > 1 || perPage > +e.target.value) {
      navigate({
          search: qs.stringify({ ...params, perPage: +e.target.value }),
        });
        console.log(perPage, +e.target.value);
      // setPerPage(+e.target.value);
      if (perPage > total) {
        console.log('hello');
        navigate({ search: qs.stringify({ ...params, page: '1' }) });
        // setPage(1);
      }
    }
  };
  useEffect(()=>{
    setPage(+get(params, 'page', 1))
    setPerPage(+get(params, 'perPage', 5))
  }, [params.page, params.perPage])
  // console.log(perPage, total);
  const from = page * perPage - perPage;
  const to = page * perPage;
  const paginatedData = data.slice(from, to);
  return (
    <div>
      <div className={"table__wrapper"}>
        <table className="table2">
          <thead>
            <tr>
              <td>#</td>
              {columns?.map((elem, i) => (
                <td key={i}> {elem.title}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((item, inde) => (
              <tr
                key={inde}
                style={onRowClick ? { cursor: "pointer" } : {}}
                onClick={() => onRowClick(item)}
              >
                <td>{inde + 1}</td>
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
            <div className="icon__wrapper" onClick={() => handlePageChange(-1)}>
              <img src={left} alt="icon" />
            </div>
            <p>{`${page}/${pagesAmount}`}</p>
            <div className="icon__wrapper" onClick={() => handlePageChange(1)}>
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
