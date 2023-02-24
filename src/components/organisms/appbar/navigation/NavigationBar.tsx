import * as React from 'react';
import { Flex } from '@tremor/react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import UserInfo from './UserInfo';
import { ROUTES } from '../../../../Routes';
import { useAuthContextState } from '../../../../context/AuthContext';

const StyledLink = tw(
  Link
)`uppercase font-semibold text-sm hover:bg-gray-100 px-4 py-2 rounded-md`;

interface INavigationBarProps {}

const NavigationBar: React.FC<INavigationBarProps> = () => {
  const { t } = useTranslation();
  const { userToken } = useAuthContextState();

  const isLogged = !!userToken;
  return (
    <nav className='hidden sm:block'>
      <Flex spaceX='space-x-4'>
        <SearchBar />
        {isLogged && <UserInfo />}
        {!isLogged && (
          <Flex spaceX='space-x-1'>
            <StyledLink to={ROUTES.LOGIN}>{t('appbar.login')}</StyledLink>
            <StyledLink to={ROUTES.REGISTER}>{t('appbar.signup')}</StyledLink>
          </Flex>
        )}
      </Flex>
    </nav>
  );
};

export default NavigationBar;
