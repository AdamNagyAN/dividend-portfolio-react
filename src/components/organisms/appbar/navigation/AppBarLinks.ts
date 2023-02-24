import { TFunction } from 'i18next';
import { ROUTES } from '../../../../Routes';

export const getNavbarLinksWhenNotLogged = (t: TFunction) => {
  return [
    {
      label: t('appbar.login'),
      value: ROUTES.LOGIN,
    },
    {
      label: t('appbar.signup'),
      value: ROUTES.REGISTER,
    },
  ];
};

export const getDefaultNavbarLinks = (t: TFunction) => {
  return [
    {
      label: t('appbar.home'),
      value: ROUTES.HOME,
    },
  ];
};

export const getNavbarLinksWithUser = (t: TFunction) => {
  return [
    {
      label: t('appbar.portfolio'),
      value: ROUTES.HOME,
    },
  ];
};
