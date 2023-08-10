import Loader from 'components/loader';
import { GetAll } from 'modules';
import React, { useState } from 'react'
import Cards from '../../components/cards';
import {  thisMonth } from 'services/dates';
import Filters from 'components/filters';
import Charts from '../../components/carts';
import Modal from 'components/modal';
import { useEffect } from 'react';
import { storage } from 'services';
import ErrorPage from 'components/errorPage';
import { useTranslation } from 'react-i18next';
import './home.scss'

const CustomerHome = () => {
  const [staticDate, setStaticDate] = useState(thisMonth());
  const {t, i18n} = useTranslation()
  const lang = i18n.language
  const [month, setMonth] = useState(null);
  const [modal, setModal] = useState(null)
  useEffect(()=>{
    if (sessionStorage.getItem("modalOpened") != "true") {
      setModal(true);
    }
  }, [])
  return (
    <GetAll
      queryKey={["customers-main"]}
      url={`/users-main/month/${
        month ? moment(month).format("YYYY-MM") : staticDate
      }/`}
    >
      {({ items, isLoading, isError, error }) => {
        if (isLoading) return <Loader />;
        if (isError) return <ErrorPage error={error}/>
        console.log(items);
        const infos = [items?.bonus, items?.cashback, items?.followers_count];
        return (
          <div className="container">
            <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
            <Cards {...{ infos }} />
            <Charts data={items}/>
            {modal ? (
              <Modal
                onClose={() => {
                  setModal(false);
                  sessionStorage.setItem("modalOpened", "true");
                }}
              >
                <div className='advertisment__wrapper' >
                  <h2 className='advertisment__title'>{items?.notification[`title_${lang}`]}</h2>
                  <p className='advertisment__message'>{items?.notification[`message_${lang}`]}</p>
                </div>
              </Modal>
            ) : null}
          </div>
        );
      }}
    </GetAll>
  );
}

export default CustomerHome