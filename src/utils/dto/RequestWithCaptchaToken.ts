type RequestWithCaptchaToken<T> = {
    request: T,
    captchaToken: string;
}

export default RequestWithCaptchaToken