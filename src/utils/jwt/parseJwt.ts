export interface UserDataDto {
	code: string;
	email: string;
	firstname: string;
	lastname: string;
}

const b64DecodeUnicode = (str: string) =>
	decodeURIComponent(
		Array.prototype.map
			.call(atob(str), c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
			.join('')
	);

const parseJwt = (token?: string): UserDataDto | null => {
	if (!token) return null;
	try {
		return JSON.parse(b64DecodeUnicode(token.split('.')[1]));
	} catch (e) {
		return null;
	}
};

export default parseJwt;
