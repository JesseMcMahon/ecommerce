import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getCartTotal from "../../actions/getAction";

const Header = (props) => {
  useEffect(() => {
    getCartTotal();
  }, []);

  return (
    <>
      <header>
        <div className="overlay"></div>
        <nav>
          <h2 className="sm-hide">TIMELESS</h2>
          <ul>
            <li className="sm-hide">
              <Link to="/">Home</Link>
            </li>
            <li className="sm-hide">
              <Link to="/about">About</Link>
            </li>
            <li className="cart">
              <Link to="/cart">
                <ion-icon name="cart"></ion-icon>Cart{" "}
                <span>{props.cartProps.cartTotal}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getCartTotal })(Header);
