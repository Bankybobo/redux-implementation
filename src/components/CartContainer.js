import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { clearCart } from "../redux/actions/actions";

const CartContainer = ({ cart = [], onClearCart, total }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>{parseFloat(total.toFixed(2))}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            onClearCart();
          }}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);