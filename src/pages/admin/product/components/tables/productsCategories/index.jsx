import { useQueryClient } from "@tanstack/react-query";
import { Button } from "components/buttons";
import ErrorPage from "components/errorPage";
import Loader from "components/loader";
import WhiteRowTable from "components/tables/whiteRowTable";
import { usePost } from "crud";
import { get } from "lodash";
import { GetAll } from "modules";
import React from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsCategories = () => {
    const {t} = useTranslation()
    const {mutate:deleteCategory, isLoading:deleteLoading} = usePost()
    const queryClient = useQueryClient()
  return (
    <div className="container" style={{margin:"20px 0px"}}>
        <h1 className="title">{t("Kategoriya")}</h1>
        <ToastContainer/>
      <GetAll
        queryKey={["admin-products-categories"]}
        url={"/admin-product-categories/"}
      >
        {({ items, isLoading, isError, error }) => {
            if(isLoading) return <Loader/>
            if(isError) return <ErrorPage {...{error}}/>
            // console.log(items);
          return (
            <div>
                <ToastContainer/>
            <WhiteRowTable
                data={items}
                hasPagination
                columns={[
                    {
                        title: `${t("Nomi")} UZ`,
                        key: "name_uz",
                    },
                    {
                        title: `${t("Nomi")} RU`,
                        key: "name_ru",
                    },
                    {
                        title:'',
                        render:(value, row)=>{
                            return (
                                <Button
                                type={"button"}
                                color={"#FF0000"}
                                text={t("O'chirish")}
                                onClick={()=>{
                            deleteCategory({
                                url: `/admin-product-categories/${row?.id}`,
                              method:"delete",
                              onSuccess:()=>{
                                  toast.success("SUCCESSFUL")
                                  queryClient.invalidateQueries(
                                      "admin-products-categories"
                                      );
                                    },
                                    onError:(error)=>{
                                        toast.error(
                                            get(
                                                error,
                                                "response.data.message",
                                                error?.message
                                                )
                                                );
                                            }
                            });
                        }}
                        />
                        );
                    }
                }
              ]}
              />
        </div>
          );
        }}
      </GetAll>
    </div>
    );
};

export default ProductsCategories;
