import Loader from 'components/loader';
import { GetAll } from 'modules';
import React, { useState } from 'react'
import Cards from '../../components/cards';
import { getLastMonth } from 'services/dates';
import Filters from 'components/filters';
import Charts from '../../components/carts';
import Modal from 'components/modal';
import { useEffect } from 'react';
import { storage } from 'services';

const CustomerHome = () => {
  const [staticDate, setStaticDate] = useState(getLastMonth());
  const [month, setMonth] = useState(null);
  const [modal, setModal] = useState(null)
  useEffect(()=>{
    if(storage.get('modalOpened') != 'true'){
      setModal(true)
    }
  }, [])
  return (
    <GetAll queryKey={['']}>
      {
        ({items, isLoading})=>{
          if(isLoading) return <Loader/>
          const infos = [600000, 5000, 40]
          return (
            <div className="container">
              <Filters {...{ staticDate, setStaticDate, month, setMonth }} />
              <Cards {...{ infos }} />
              <Charts/>
              {
                modal ? (
                  <Modal onClose={()=>{
                    setModal(false);
                    storage.set('modalOpened', 'true')
                  }}>
                    <p style={{maxWidth:'700px', padding:"20px 5px"}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab itaque deleniti voluptatibus adipisci debitis doloremque repellat illum doloribus. Pariatur, ipsum!
                    </p>
                  </Modal>
                ) : null
              }
            </div>
          );
        }
      }
    </GetAll>
  )
}

export default CustomerHome