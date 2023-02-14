import React from 'react';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from './components/molecules/snackbar/SnackbarProvider';
import {AuthContextProvider} from './context/AuthContext';
import {AppConfigProvider} from './context/AppConfigContext';

export type IAppLevelProvidersProps = {
  children: React.ReactNode;
};

const AppLevelProviders: React.FC<IAppLevelProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <AppConfigProvider>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY ?? ''}
        >
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider>
              <AuthContextProvider>{children}</AuthContextProvider>
            </SnackbarProvider>
          </QueryClientProvider>
        </GoogleReCaptchaProvider>
      </AppConfigProvider>
    </BrowserRouter>
  );
};

export default AppLevelProviders;
