import { useEffect } from 'react';

function Alert(props) {
    const { name, handleCloseAlert } = props;

    useEffect(() => {
        const timerId = setTimeout(handleCloseAlert, 1500);

        return () => clearTimeout(timerId);
        //eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} added to basket!</div>
        </div>
    );
}

export { Alert };
