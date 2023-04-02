import { Card } from './Card';

function Cards(props) {
    const { items, addToCart } = props;

    if (items)
        return (
            <div className='cards-container'>
                {items.map((elem) => (
                    <Card key={elem.id} addToCart={addToCart} {...elem} />
                ))}
            </div>
        );
    else return <h3>Nothing there</h3>;
}

export { Cards };
