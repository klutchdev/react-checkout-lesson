import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const totalPrice = useState(0);

  

  return (
    <div>
      <div>
        <h3>Your Plan</h3>
      </div>

      <h1>$ {totalPrice}/month</h1>

      <br />

      <form>
        <div>
          {/* Column */}

          <h5>Business Type</h5>
          <div>
            {/* Business Type  */}

            <button>Independent Barber</button>
            <button>Barbershop</button>
          </div>

          <h5>Select Plan</h5>
          <div>
            {/* Select Plan  */}

            <button>Website</button>
            <button>Website + Apps</button>
          </div>

          <h5>Select Add ons</h5>
          <div>
            {/* Select Add ons  */}

            <button>Online Store</button>
            <button>Marketing Services</button>
          </div>

          <h5>Delivery Speed</h5>
          <div>
            {/* Delivery Speed  */}

            <button>5-7 days</button>
            <button>8-14 days</button>
            <button>15-30 days</button>
          </div>
        </div>

        <br />
        <br />

        <button>Proceed to Checkout</button>
      </form>
    </div>
  );
}
