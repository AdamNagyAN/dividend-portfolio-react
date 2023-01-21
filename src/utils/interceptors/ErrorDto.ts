interface ErrorDto {
	code?: string;
	message: string;
	attributes: {
		[key: string]: string;
	};
}

export default ErrorDto;
