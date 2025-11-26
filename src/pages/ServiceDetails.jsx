import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import servicesData from "../../public/services.json";


const ServiceDetails = () => {

  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);

  const { myId } = useParams()

 useEffect(() => {
  setServices(servicesData);
}, []);



useEffect(() => {
  if (services.length > 0) {
    const result = services.find(service => service.serviceId == myId);
    setServiceDetails(result);
  }
}, [myId, services]);





  return (
    <div>
     <img src={serviceDetails?.image} alt="" />


    </div>
  );
};
export default ServiceDetails;