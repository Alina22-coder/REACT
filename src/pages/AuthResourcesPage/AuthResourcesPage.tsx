import {AuthResourcesComponent} from "../../components/AuthResourcesComponent/AuthResourcesComponent.tsx";

// експортуємо компонент, щоб його можна було використовувати в інших файлах
export const AuthResourcesPage = () => {
    //повертаємо JSX-розмітку
    //додаємо компонент, який містить основну логіку
    return (
        <>
            <h2 className='page__title'>Auth resources page</h2>
            <AuthResourcesComponent/>
        </>
    );
};