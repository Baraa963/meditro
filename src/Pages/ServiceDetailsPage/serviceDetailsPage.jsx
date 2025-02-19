/* eslint-disable react-hooks/rules-of-hooks */
import ServiceDetailsHeader from '../../Components/Header/header';
import ServiceDetails from '../../Components/ServiceDetails/serviceDetails';
import Footer from '../../Components/Footer/footer'
import { useEffect } from 'react';
export default  function serviceDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <ServiceDetailsHeader ComponentName='Service Details' Path='service-detail'/>
    <ServiceDetails/>
    <Footer/>
      
    </>
  )
}

