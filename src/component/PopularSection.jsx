import React, { useEffect, useState } from "react";


const PopularSection = () => {


   const [Services, setServices] = useState([]);

   useEffect(() => {
      fetch('./services.json')
         .then(res => res.json())
         .then(data => setServices(data))
         .catch(err => console.log(err))

   }, [])



   console.log(Services)




   return (
      <div className="px-[120px]">
         <div>
            <h3 className="font-bold text-4xl text-center p-6">Popular Winter Care Service</h3>
         </div>

         <div className="grid grid-cols-3 gap-6">
            {
               Services.slice(0,6).map(service =>
                  <div className="card bg-base-100 w-90 shadow-md">
                     <figure>
                        <img className="w-full h-[300px] object-cover"
                           src={service?.image}
                           alt="Shoes" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">{service?.serviceName}</h2>
                        <div className="flex justify-between">
                           <p>Price: {service?.price}</p>
                           <p>Rating: {service?.rating}</p>
                        </div>
                        <div className="card-actions justify-end">
                           <button className="btn btn-primary">View Details</button>
                        </div>
                     </div>
                  </div>
               )
            }
         </div>
      </div>
   );
};

export default PopularSection;