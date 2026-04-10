import React from "react";

function Subscription(){
     const isSubscribed = true

     return (
         <div className = 'min-h-screen bg-gray-100 p-6 flex items-center justify-center'>
            <div className = 'bg-white p-6 rounded=lg shadow-md text-center'>
                <h2 className = 'texxt-xl font-bold mb-4 text-blue-600'>Subscription Status</h2>
                
                    {
                        isSubscribed
                        ? <button className = 'px-4 py-2 bg-green-500 text-white rounded'>Subscribed, Thank You!</button>
                        : <button className = 'px-4 py-2 bg-red-500 text-white rounded'>Subscribe Now</button>
                    }
            </div>
          </div>   
     )
}

export default Subscription