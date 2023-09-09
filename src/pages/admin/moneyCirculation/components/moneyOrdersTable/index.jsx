import WhiteRowTable from "components/tables/whiteRowTable";
import { obunachilar } from "assets/db";
import { formatNums } from "services/formatNums";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./subscribersTable.scss";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { Button } from "components/buttons";
import Modal from "components/modal";
import { ContainerForm } from "modules";
import { get } from "lodash";

const MoneyOrdersTable = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [modal, setModal] = useState({ isOpen: false, data: null });
  const dataCorrected = data.reduce((total, curr) => {
    // console.log(curr);
    return [
      ...total,
      {
        id: curr?.id,
        date: curr?.created_time,
        phone_number: curr?.user?.phone_number,
        usd: curr?.usd,
        uzs: curr?.uzs,
        full_name: `${curr?.user?.first_name} ${curr?.user?.last_name}`,
      },
    ];
  }, []);
  // console.log(dataCorrected);
  const columns = [
    {
      title: t("Sana"),
      key: "date",
      render: (value) => moment(value).format("DD/MM/YYYY"),
    },
    {
      title: t("F.I.SH"),
      key: "full_name",
    },
    {
      title: t("Telefon raqam"),
      key: "phone_number",
      // render: (value) => (
      //   <>
      //     {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
      //   </>
      // ),
    },
    {
      title: "USD",
      key: "usd",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>$</span>
        </>
      ),
    },
    {
      title: "UZS",
      key: "uzs",
      render: (value) => (
        <>
          {formatNums(value)} <span style={{ color: "#B2B7C1" }}>uzs</span>
        </>
      ),
    },
    {
      title: t("To'lash"),
      render: (val, row) => {
        return (
          <Button
            text={t("To'lash")}
            onClick={() => {
              setModal({ isOpen: true, data: row });
              // console.log(modal);
            }}
          />
        );
      },
    },
  ];
  return (
    <>
      <div className="money-circilation-table-users">
        {/* <h1 className="title">{t("Mijozlar")}</h1> */}
        <ToastContainer/>
      </div>
      <WhiteRowTable
        {...{ columns }}
        // onRowClick={(data) => navigate(`/subscriber/${data?.id}`)}
        data={dataCorrected}
        hasPagination
        hasNum
      />
      {modal.isOpen ? (
        <Modal onClose={() => setModal({ isOpen: false, data: null })}>
          <ContainerForm
            url="/admin-money-pay/"
            method="post"
            onSuccess={()=>{
              toast.success("SUCCESSFUL")
              setModal({isOpen:false, data:null})
            }}
            onError={(error)=>{
              toast.error(get(error, "response.data.message", error?.message));
            }}
            fields={[
              {
                name:'pay',
                value:modal?.data?.id,
              }
            ]}
          >
            {({ handleSubmit, isLoading, values }) => {
              console.log(values);
              return (
                <>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <label className="input-field__wrapper">
                        <span className="label">{t("Ism")}</span>
                        <input
                          type="text"
                          className="custom-input"
                          disabled
                          value={modal?.data?.full_name}
                        />
                      </label>
                      <label className="input-field__wrapper">
                        <span className="label">{t("Telefon raqam")}</span>
                        <input
                          type="text"
                          className="custom-input"
                          disabled
                          value={modal?.data?.phone_number}
                        />
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <label className="input-field__wrapper">
                        <span className="label">{t("USD")}</span>
                        <input
                          type="text"
                          className="custom-input"
                          disabled
                          value={`${modal?.data?.usd}$`}
                        />
                      </label>
                      <label className="input-field__wrapper">
                        <span className="label">{t("UZS")}</span>
                        <input
                          type="text"
                          className="custom-input"
                          disabled
                          value={`${modal?.data?.uzs} uzs`}
                        />
                      </label>
                    </div>
                  </div>
                  <div style={{display:"flex", justifyContent:"end", marginTop:"20px"}}>
                    <Button
                      text={t("O'tkazma")}
                      onClick={handleSubmit}
                      type={"submit"}
                      disabled={isLoading}
                    />
                  </div>
                </>
              );
            }}
          </ContainerForm>
        </Modal>
      ) : null}
    </>
  );
};

export default MoneyOrdersTable;
