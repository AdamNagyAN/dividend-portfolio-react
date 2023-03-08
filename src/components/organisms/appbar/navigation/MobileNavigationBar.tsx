import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import tw from 'twin.macro';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {
  getDefaultNavbarLinks,
  getNavbarLinksWhenNotLogged,
  getNavbarLinksWithUser,
} from './AppBarLinks';
import Link from '../../../atoms/link/Link';
import IconButton from '../../../molecules/buttons/IconButton';
import SearchBar from '../SearchBar';
import 'styled-components/macro';
import useDisableBodyScroll from '../../../../utils/hooks/useDisableBodyScroll';
import {
  useAuthContextDispatch,
  useAuthContextState,
} from '../../../../context/AuthContext';
import { AuthContextActionTypes } from '../../../../context/AuthReducer';

const MenuItem = tw(
  Link
)`w-full px-4 py-4 text-black text-center font-medium hover:bg-gray-light hover:text-black rounded-md`;

interface MobileNavigationBarProps {
  open: boolean;
  onClose: () => void;
}

const MobileNavigationBar: React.FC<MobileNavigationBarProps> = ({
  open,
  onClose,
}) => {
  const { userData } = useAuthContextState();
  const dispatch = useAuthContextDispatch();
  const isLogged = !!userData;
  useDisableBodyScroll(open);
  const { t } = useTranslation();
  const items = [
    ...getDefaultNavbarLinks(t),
    ...(isLogged ? getNavbarLinksWithUser(t) : getNavbarLinksWhenNotLogged(t)),
  ];

  const onLogOut = () => {
    dispatch({
      type: AuthContextActionTypes.LOG_OUT,
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3 }}
          className='w-1/2 min-w-[300px] h-full bg-white fixed top-0 right-0 flex flex-col items-center pt-30 px-4 z-50'
        >
          <IconButton
            className='self-end my-4'
            icon={<XMarkIcon className='h-6 w-6 m-2' />}
            variant='icon'
            onClick={onClose}
          />
          <SearchBar className='mb-4' />
          {items.map(it => (
            <MenuItem to={it.value} onClick={onClose}>
              {it.label}
            </MenuItem>
          ))}
          {isLogged && (
            <button
              type='button'
              onClick={onLogOut}
              className='w-full px-4 py-4 text-black text-center font-medium hover:bg-gray-light hover:text-black rounded-md'
            >
              {t('appbar.logout')}
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigationBar;
