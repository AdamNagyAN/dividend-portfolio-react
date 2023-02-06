import * as React from 'react';
import { Flex, Subtitle, Text } from '@tremor/react';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';
import useDebounce from '../../../utils/input/useDebounce';
import useSearch from '../../../query/search/useSearch';
import { ROUTES } from '../../../Routes';
import InputWithDropdown from '../../molecules/input-with-dropdown/InputWithDropdown';
import DropdownItem from '../../atoms/dropdown-item/DropdownItem';
import UserInfo from './UserInfo';
import { useAuthContextState } from '../../../context/AuthContext';
import 'styled-components/macro';

const NavContainer = tw.div`py-3 px-10 bg-white text-black`;
const Brand = tw(Link)`uppercase font-medium text-lg`;
const StyledLink = tw(
  Link
)`uppercase font-semibold text-sm hover:bg-gray-100 px-4 py-2 rounded-md`;

const AppBar: React.FC = () => {
  const { t } = useTranslation();
  const { userToken } = useAuthContextState();
  const { control, watch } = useForm<{ search: string }>();
  const navigate = useNavigate();
  const debouncedSearchQuery = useDebounce(watch('search'), 600);
  const isLogged = !!userToken;

  const { data, isLoading, isFetching } = useSearch(debouncedSearchQuery);
  const onSelectSymbol = (symbol: string) => {
    navigate(ROUTES.TICKER(symbol));
  };

  return (
    <NavContainer>
      <Flex>
        <Brand to={ROUTES.HOME} className='hidden lg:block'>
          {t('brand-name')}
        </Brand>
        <Brand to={ROUTES.HOME} className='block lg:hidden'>
          {t('brand-short-name')}
        </Brand>
        <nav>
          <Flex spaceX='space-x-4'>
            <Controller
              control={control}
              name='search'
              render={({ field: { value, onChange } }) => (
                <InputWithDropdown
                  inputProps={{ placeholder: 'Ticker...', value, onChange }}
                  showDropdown={!isLoading && data}
                  isLoading={isFetching}
                >
                  {!isLoading &&
                    data &&
                    data.length !== 0 &&
                    data.map((it: any) => (
                      <DropdownItem
                        key={it.symbol}
                        tw='flex flex-col justify-items-start items-start'
                        onClick={() => onSelectSymbol(it.symbol)}
                      >
                        <Subtitle>{it.symbol}</Subtitle>
                        <Text>{it.shortname}</Text>
                      </DropdownItem>
                    ))}
                </InputWithDropdown>
              )}
            />
            {isLogged && <UserInfo />}
            {!isLogged && (
              <Flex spaceX='space-x-1'>
                <StyledLink to={ROUTES.LOGIN}>{t('appbar.login')}</StyledLink>
                <StyledLink to={ROUTES.REGISTER}>
                  {t('appbar.signup')}
                </StyledLink>
              </Flex>
            )}
          </Flex>
        </nav>
      </Flex>
    </NavContainer>
  );
};

export default AppBar;
