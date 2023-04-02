import React, { useState, useEffect } from 'react';
import { Cards } from '../components/Cards';
import { Preloader } from '../components/Preloader';
import { API_KEY, API_URL } from '../config';
import { Cart } from '../components/Cart';
import { Basket } from '../components/Basket';
import { Alert } from '../components/Alert';

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShown, setIsCartShown] = useState(false);
    const [alertName, setAlertName] = useState('');

    const handleCloseAlert = () => {
        setAlertName('');
    };

    const addToCart = ({ id: gId, name: gName, price: gPrice }) => {
        let foundInCart = false;

        const newOrder = order.map((obj) => {
            if (obj.id === gId) {
                obj.q++;
                foundInCart = true;
            }
            return obj;
        });

        if (foundInCart) {
            setOrder(newOrder);
        } else {
            setOrder([...order, { id: gId, name: gName, price: gPrice, q: 1 }]);
        }

        setAlertName(gName);
        console.log(gName);
    };

    const changeOrder = (id, type) => {
        if (type === 'INC') {
            const newOrder = order.map((obj) => {
                if (obj.id === id) {
                    obj.q++;
                }
                return obj;
            });

            setOrder(newOrder);
        } else if (type === 'DEC') {
            const newOrder = order.map((obj) => {
                if (obj.id === id) {
                    if (obj.q > 1) obj.q--;
                }
                return obj;
            });

            setOrder(newOrder);
        } else if (type === 'DEL') {
            const newOrder = order.filter((elem) => elem.id !== id);

            setOrder(newOrder);
        } else if (type === 'DELALL') {
            setOrder([]);
        }
    };

    const fetchData = () => {
        fetch(API_URL, {
            headers: new Headers({
                Authorization: API_KEY,
            }),
        })
            .then((data) => data.json())
            .then((data) => {
                data.featured && setItems(data.featured);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className='container content'>
            {alertName ? (
                <Alert name={alertName} handleCloseAlert={handleCloseAlert} />
            ) : null}
            <Basket
                active={isCartShown}
                setActive={setIsCartShown}
                data={order}
                changeOrder={changeOrder}
            />
            <Cart quantity={order.length} showCart={setIsCartShown} />
            {loading ? (
                <Preloader />
            ) : (
                <Cards items={items} addToCart={addToCart} />
            )}
        </main>
    );
}

export { Shop };
