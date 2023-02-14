export enum ENV {
    local = 'local',
    development = 'development',
    prod = 'prod'
}

export interface AppConfig {
    recaptchaToken: string;
    api: string;
    environment?: ENV;
}
