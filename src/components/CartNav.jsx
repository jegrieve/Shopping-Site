import React, {useState, useEffect} from 'react';

const CartNav = () => {
  const [showCartNav, setShowCartNav] = useState(false);
  return <div data-testid="CartNav">
    {showCartNav ?
    <div>
      <button>Hide</button>
      CartNav
      </div> :
    <div>
      <button>Show</button>
      </div>}
  </div>;
};

export default CartNav;
