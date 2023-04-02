function Header() {
    return (
        <header className='header'>
            <nav className='green'>
                <div className='nav-wrapper'>
                    <a href='#' className='brand-logo'>
                        React Shop
                    </a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <a href='https://github.com/EvgeniQwerty/react-shop'>
                                Repo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export { Header };
