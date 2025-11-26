import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {

  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([null])
  const { myId } = useParams()

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))
  }, [])



  useEffect(() => {
    if (services.length > 0) {
      const findResult = services.find(
        service => String(service.serviceId) === String(myId)
      );
      setServiceDetails(findResult);
    }
  }, [myId, services]);
  console.log(serviceDetails);




  return (
    <div>
      <img src={serviceDetails?.image} alt="" />

    </div>
  );
};
export default ServiceDetails;