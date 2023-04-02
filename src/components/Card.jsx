function Card(props) {
    return (
        <div className='card good' id={props.id}>
            <div className='card-image'>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{props.name}</span>
                <p className='card-desc'>{props.description}</p>
                <div className='card-action'>
                    <button
                        className='btn green'
                        onClick={() =>
                            props.addToCart({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Buy
                    </button>
                    <p className='right card-price'>{props.price}$</p>
                </div>
            </div>
        </div>
    );
}

export { Card };
