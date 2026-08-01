"use client";
import React from "react";
import Script from "next/script";

const PaymentPage = () => {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <Script id="razorpay-script">
        {`
          var options = {
            "key": "YOUR_KEY_ID",
            "amount": "50000",
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_9A33XWu170gUtm",
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": {
              "name": "Gaurav Kumar",
              "email": "gaurav.kumar@example.com",
              "contact": "9000090000"
            },
            "notes": {
              "address": "Razorpay Corporate Office"
            },
            "theme": {
              "color": "#3399cc"
            }
          };

          var rzp1 = new Razorpay(options);

          document.getElementById('rzp-button1').onclick = function(e) {
            rzp1.open();
            e.preventDefault();
          };
        `}
      </Script>
    </>
  );
};

export default PaymentPage;