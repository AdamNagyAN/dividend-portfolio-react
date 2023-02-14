import * as React from 'react';
import {createContext} from 'react';
import {AppConfig, ENV} from './AppConfig';
import axiosBase from "../service/axiosBase";

export const AppConfigContext = createContext<AppConfig>({
  api: '',
  recaptchaToken: '',
  environment: ENV.local,
});

const configState: AppConfig = {
  recaptchaToken: process.env.REACT_APP_RECAPTCHA_KEY as string,
  environment: process.env?.NODE_ENV as ENV,
  api: process.env.REACT_APP_BASE_URL as string,
};

export const AppConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state] = React.useState(configState);
  const contextValue = React.useMemo(() => {
    axiosBase.defaults.baseURL = state.api
    return { ...state };
  }, [state]);

  return (
    <AppConfigContext.Provider value={contextValue}>
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = (): AppConfig => {
  return React.useContext(AppConfigContext);
};

