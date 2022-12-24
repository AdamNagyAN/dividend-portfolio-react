import * as React from 'react';
import { Flex, Subtitle, Text } from '@tremor/react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
//	eslint-disable-next-line
import { BellIcon } from '@heroicons/react/24/outline';
import useDebounce from '../../../utils/input/useDebounce';
import useSearch from '../../../query/search/useSearch';
import { ROUTES } from '../../../Routes';
import InputWithDropdown from '../../molecules/input-with-dropdown/InputWithDropdown';
import DropdownItem from '../../atoms/dropdown-item/DropdownItem';
import 'styled-components/macro';
import IconButton from '../../molecules/buttons/IconButton';

const AppBar: React.FC = () => {
	const { t } = useTranslation();
	const { control, watch } = useForm<{ search: string }>();
	const navigate = useNavigate();
	const debouncedSearchQuery = useDebounce(watch('search'), 600);

	const { data, isLoading, isFetching } = useSearch(debouncedSearchQuery);
	const onSelectSymbol = (symbol: string) => {
		navigate(ROUTES.TICKER(symbol));
	};

	return (
		<div className='py-3 px-10 bg-white text-black'>
			<Flex>
				<a className='uppercase font-medium text-md' href='/'>
					{t('brand-name')}
				</a>
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
						<IconButton icon={<BellIcon />} />
						<a href='/'>Nagy Adam</a>
					</Flex>
				</nav>
			</Flex>
		</div>
	);
};

export default AppBar;
