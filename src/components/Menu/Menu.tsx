import {Link} from "react-router-dom";

// експортуємо компонент, щоб його можна було використовувати в інших файлах
export const Menu = () => {
    return (
        <div className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'>
                    {/*перехід на сторінку без перезавантаження*/}
                    <Link to="/">Home</Link>
                </li>
                <li className='menu__item'>
                    {/*перехід на сторінку без перезавантаження*/}
                    <Link to="/login">Login</Link>
                </li>
                <li className='menu__item'>
                    {/*перехід на сторінку без перезавантаження*/}
                    <Link to="/auth/resources">Auth Resources</Link>
                </li>
            </ul>
        </div>
    );
};