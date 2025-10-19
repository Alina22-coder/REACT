import {LoginComponent} from "../../components/LoginComponent/LoginComponent.tsx";

// експортуємо компонент, щоб його можна було використовувати в інших файлах
export const LoginPage = () => {
    //повертаємо JSX-розмітку
    //додаємо компонент, який буде містити форму входу (логіну)
    return (
        <>
            <h2 className='page__title'>Login page</h2>
            <LoginComponent/>
        </>
    );
};