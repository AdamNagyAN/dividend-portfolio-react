import * as React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';
import { Subtitle } from '@tremor/react';
import IconButton from '../../molecules/buttons/IconButton';
import {
	useAuthContextDispatch,
	useAuthContextState,
} from '../../../context/AuthContext';
import DropdownItem from '../../atoms/dropdown-item/DropdownItem';
import { AuthContextActionTypes } from '../../../context/AuthReducer';

interface IUserInfoProps {}

const Container = tw.div`relative`;
const Dropdown = tw.div`absolute z-10 divide-y overflow-y-auto w-full left-0 max-h-72 bg-white border-gray-light divide-gray-light mt-1 mb-1 rounded-md border shadow-lg`;

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
		<>
			<IconButton icon={<BellIcon />} />
			<Container
				onMouseOver={() => setIsShowDropdown(true)}
				onFocus={() => setIsShowDropdown(true)}
				onMouseLeave={() => setIsShowDropdown(false)}
				onBlur={() => setIsShowDropdown(false)}
			>
				<span>{concatenatedName ?? t('appbar.unknown-user')}</span>
				{isShowDropdown && (
					<Dropdown>
						<DropdownItem
							tw='flex flex-col justify-items-start items-start'
							onClick={onLogOut}
						>
							<Subtitle>{t('appbar.logout')}</Subtitle>
						</DropdownItem>
					</Dropdown>
				)}
			</Container>
		</>
	);
};

export default UserInfo;
