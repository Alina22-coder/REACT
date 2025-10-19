//створюємо метод для отримання даних з LocalStorage за ключем
export const retriveLocalStorage = <T> (key:string) => {
    //повертається об'єкт або якщо нічого немає, порожній рядок
    const object = localStorage.getItem(key) || '';
    //якщо об'єкт не знайдено повертаємо пустий об'єкт строго типізований як Т даних
    if(!object){
        return {} as T;
    }
    // якщо значення існує, розпарсуємо JSON-рядок у об'єкт
    const parse = JSON.parse(object);
    // повертаємо розпарсений об'єкт, строго типізований як T
    return parse as T;
}

