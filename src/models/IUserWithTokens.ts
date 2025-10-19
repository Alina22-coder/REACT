//створюємо необхідну модель даних
export interface IUserWithTokens {
	firstName: string;
	lastName: string;
	image: string;
	gender: string;
	id: number;
	accessToken: string;
	email: string;
	username: string;
	refreshToken: string;
}


