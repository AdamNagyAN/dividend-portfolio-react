interface ErrorDto {
	code: string;
	description: string;
	attributes: {
		[key: string]: string;
	};
}

export default ErrorDto;
