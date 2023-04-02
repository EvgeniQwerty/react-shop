function Cart(props) {
    const { quantity = 0, showCart } = props;

    return (
        <div
            className='cart green darken-2 white-text'
            onClick={() => showCart(true)}
        >
            <i className='material-icons'>local_grocery_store</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
