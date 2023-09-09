import { ContainerForm, GetAll } from "modules";
import React, { useState } from "react";
import EmployeeInfoForm from "../../components/employeeInfoForm";
import { useParams } from "react-router-dom";
import Loader from "components/loader";
import ErrorPage from "components/errorPage";
import { useTranslation } from "react-i18next";
import { Button } from "components/buttons";
import Modal from "components/modal";
import { Field } from "formik";
import { Input } from "components/fields";
import CustomInputMask from "components/fields/inputMask";

const Employee = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  return (
    <div className="container">
      <GetAll queryKey={["admin-employee"]} url={`/admin-employees/${id}`}>
        {({ items, isLoading, isError, error }) => {
          if (isLoading) return <Loader />;
          if (isError) return <ErrorPage error={error} />;
          // console.log(items);
          return (
            <>
              <h1 className="title">{t("Xodim")}</h1>
              <EmployeeInfoForm data={items} />
            </>
          );
        }}
      </GetAll>
    </div>
  );
};

export default Employee;
