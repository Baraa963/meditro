import ServiceDetailsHeader from '../../Components/Header/header';
import ServiceDetails from '../../Components/ServiceDetails/serviceDetails';
import Footer from '../../Components/Footer/footer'
export default  function serviceDetailsPage() {
  return (
    <>
    <ServiceDetailsHeader ComponentName='Service Details' Path='service-detail'/>
    <ServiceDetails/>
    <Footer/>
      
    </>
  )
}

