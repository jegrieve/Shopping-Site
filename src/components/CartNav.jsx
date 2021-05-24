import React, {useState, useEffect} from 'react';
import Cart from "./Cart"

const CartNav = () => {
  const [showCartNav, setShowCartNav] = useState(false);
  return <div data-testid="CartNav">
    {showCartNav ?
    <div>
      <button>Hide</button>
        <Cart />
      </div> :
    <div>
      <button>Show</button>
      </div>}
  </div>;
};

export default CartNav;
