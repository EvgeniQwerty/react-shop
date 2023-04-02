function BasketElem(props) {
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>
                <button
                    className='btn green lighten-2'
                    onClick={() => props.changeOrder(props.data.id, 'DEC')}
                >
                    -
                </button>
            </td>
            <td>{props.data.q}</td>
            <td>
                <button
                    className='btn green lighten-2'
                    onClick={() => props.changeOrder(props.data.id, 'INC')}
                >
                    +
                </button>
            </td>
            <td>{+props.data.q * +props.data.price}</td>
            <td>
                <button
                    className='btn green lighten-2'
                    onClick={() => props.changeOrder(props.data.id, 'DEL')}
                >
                    &#10006;
                </button>
            </td>
        </tr>
    );
}

export { BasketElem };
