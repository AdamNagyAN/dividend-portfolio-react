import * as React from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';
import IconButton from '../../molecules/buttons/IconButton';
import {
  useAuthContextDispatch,
  useAuthContextState,
} from '../../../context/AuthContext';
import DropdownItem from '../../atoms/dropdown-item/DropdownItem';
import { AuthContextActionTypes } from '../../../context/AuthReducer';

interface IUserInfoProps {}

const Container = tw.div`relative`;
const Dropdown = tw.div`min-w-[200px] absolute z-10 overflow-y-auto w-full right-0 max-h-72 bg-white border-gray-light py-2 divide-gray-light mt-1 mb-1 rounded-md border shadow-lg`;

const UserInfo: React.FC<IUserInfoProps> = () => {
  const { t } = useTranslation();
  const { userData } = useAuthContextState();
  const dispatch = useAuthContextDispatch();
  const [isShowDropdown, setIsShowDropdown] = React.useState(false);

  const concatenatedName = [userData?.firstname, userData?.lastname].join(' ');

  const onLogOut = () => {
    dispatch({
      type: AuthContextActionTypes.LOG_OUT,
    });
  };

  return (
    <div className='flex'>
      <Container>
        <IconButton
          variant='text'
          text={concatenatedName ?? t('appbar.unknown-user')}
          onClick={() => setIsShowDropdown(prev => !prev)}
        />
        {isShowDropdown && (
          <Dropdown>
            <DropdownItem>
              <span>{t('appbar.portfolio')}</span>
            </DropdownItem>
            <hr />
            <DropdownItem onClick={onLogOut}>
              <span>{t('appbar.logout')}</span>
            </DropdownItem>
          </Dropdown>
        )}
      </Container>
    </div>
  );
};

export default UserInfo;
