import * as React from 'react';
import { Flex } from '@tremor/react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../../utils/input/useDebounce';
import useSearch from '../../../query/search/useSearch';
import { ROUTES } from '../../../Routes';
import InputWithDropdown from '../../molecules/input-with-dropdown/InputWithDropdown';
import DropdownItem from '../../atoms/dropdown-item/DropdownItem';

const AppBar: React.FC = () => {
	const { t } = useTranslation();
	const { control, watch } = useForm<{ search: string }>();
	const navigate = useNavigate();
	const debouncedSearchQuery = useDebounce(watch('search'), 600);

	const { data, isLoading } = useSearch(debouncedSearchQuery);
	const onSelectSymbol = (symbol: string) => {
		navigate(ROUTES.TICKER(symbol));
	};
	return (
		<div className='py-2 px-10 bg-violet-900 text-white'>
			<Flex>
				<a href='/'>{t('brand-name')}</a>
				<nav>
					<Flex spaceX='space-x-4'>
						<Controller
							control={control}
							name='search'
							render={({ field: { value, onChange } }) => (
								<InputWithDropdown
									inputProps={{ placeholder: 'Ticker...', value, onChange }}
									showDropdown={!isLoading && data}
								>
									{!isLoading &&
										data &&
										data.length !== 0 &&
										data.map((it: any) => (
											<DropdownItem onClick={() => onSelectSymbol(it.symbol)}>
												{it.symbol}
											</DropdownItem>
										))}
								</InputWithDropdown>
							)}
						/>
						<ul>
							<li>
								<a href='/'>{t('appbar.portfolio')}</a>
							</li>
						</ul>
					</Flex>
				</nav>
			</Flex>
		</div>
	);
};

export default AppBar;
