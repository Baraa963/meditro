/* eslint-disable react-hooks/rules-of-hooks */
import ServiceDetailsHeader from '../../Components/Header/header';
import ServiceDetails from '../../Components/ServiceDetails/serviceDetails';
import Footer from '../../Components/Footer/footer'
import { useEffect } from 'react';
import { Stack } from '@mui/material';
export default  function serviceDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack sx={{display:'flex',gap:10}}>
    <ServiceDetailsHeader ComponentName='Service Details' Path='service-detail'/>
    <ServiceDetails/>
    <Footer/>
      
    </Stack>
  )
}

