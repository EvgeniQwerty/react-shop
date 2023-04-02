import { BasketElem } from './BasketElem';

function Basket(props) {
    const { active, setActive, data, changeOrder } = props;

    console.log(data);

    if (data) {
        if (data.length === 0) {
            return (
                <div
                    className={active ? 'modal-all active' : 'modal-all'}
                    onClick={() => setActive(false)}
                >
                    <div
                        className='modal-element'
                        onClick={(event) => event.stopPropagation()}
                    >
                        <p>Add products to basket</p>
                    </div>
                </div>
            );
        }

        let sum = 0;
        data.forEach((elem) => (sum += elem.q * elem.price));

        return (
            <div
                className={active ? 'modal-all active' : 'modal-all'}
                onClick={() => setActive(false)}
            >
                <div
                    className='modal-element'
                    onClick={(event) => event.stopPropagation()}
                >
                    <table>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th></th>
                                <th>Q.</th>
                                <th></th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((elem) => {
                                return (
                                    <BasketElem
                                        key={elem.id}
                                        data={elem}
                                        changeOrder={changeOrder}
                                    />
                                );
                            })}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>
                                    <b>Final price</b>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <b>{sum}</b>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <button
                        className='btn card-btn red'
                        onClick={() => {
                            alert('Order completed!');
                            setActive(false);
                            changeOrder(0, 'DELALL');
                        }}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        );
    }
}

export { Basket };
