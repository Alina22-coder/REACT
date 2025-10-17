import Joi from "joi";

export const carValidator= Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required().messages({
        "string.empty": "Поле 'brand' не може бути порожнім.",
        "string.pattern.base": "Назва бренду може містити лише літери (до 20 символів).",
        "any.required": "Поле 'brand' є обов’язковим.",
    }),

    price: Joi.number().min(0).max(1000000).required().messages({
        "number.base": "Поле 'price' має бути числом.",
        "number.min": "Ціна не може бути меншою за 0.",
        "number.max": "Ціна не може перевищувати 1 000 000.",
        "any.required": "Поле 'price' є обов’язковим.",
}),

    year: Joi.number().min(1990).max(2025).required().messages({
        "number.base": "Поле 'year' має бути числом.",
        "number.min": "Рік не може бути меншим за 1990.",
        "number.max": "Рік не може бути більшим за 2025.",
        "any.required": "Поле 'year' є обов’язковим.",
}),
})