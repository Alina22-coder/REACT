import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul>
            <li>
               <Link to='/cars'>Cars</Link>
            </li>
            <li>
               <Link to='/cars/create'>Create cars</Link>
            </li>
        </ul>
    );
};