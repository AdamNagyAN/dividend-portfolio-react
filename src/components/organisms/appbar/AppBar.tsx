import * as React from 'react';
import { Flex } from '@tremor/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { AnimatePresence } from 'framer-motion';
import { ROUTES } from '../../../Routes';
import 'styled-components/macro';
import IconButton from '../../molecules/buttons/IconButton';
import MobileNavigationBar from './navigation/MobileNavigationBar';
import useToggle from '../../../utils/hooks/useToggle';
import useScrollToTop from '../../../utils/hooks/useScrollToTop';
import NavigationBar from './navigation/NavigationBar';

const NavContainer = tw.div`py-3 px-5 sm:px-10 bg-white text-black w-full`;
const Brand = tw(Link)`uppercase font-medium text-lg`;

const AppBar: React.FC = () => {
  const { t } = useTranslation();
  const scrollToTop = useScrollToTop();
  const { state: isNavbarOpen, toggle } = useToggle();

  const onOpenNavbar = () => {
    scrollToTop();
    toggle();
  };

  return (
    <NavContainer>
      <div className='max-w-screen-2xl mx-auto'>
        <Flex tw='max-w-xl overflow-hidden'>
          <Brand to={ROUTES.HOME}>{t('brand-name')}</Brand>
          <IconButton
            icon={<Bars3BottomRightIcon className='h-6 w-6 m-2' />}
            variant='icon'
            onClick={onOpenNavbar}
            className='block sm:hidden'
          />
          <AnimatePresence>
            <MobileNavigationBar open={isNavbarOpen} onClose={toggle} />
          </AnimatePresence>
          <NavigationBar />
        </Flex>
      </div>
    </NavContainer>
  );
};

export default AppBar;
