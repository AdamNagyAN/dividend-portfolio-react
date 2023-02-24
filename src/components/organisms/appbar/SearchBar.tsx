import * as React from 'react';
import { Subtitle, Text } from '@tremor/react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputWithDropdown from '../../molecules/input-with-dropdown/InputWithDropdown';
import DropdownItem from '../../atoms/dropdown-item/DropdownItem';
import useDebounce from '../../../utils/input/useDebounce';
import useSearch from '../../../query/search/useSearch';
import { ROUTES } from '../../../Routes';
import 'twin.macro';
import 'styled-components/macro';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const { control, watch, reset } = useForm<{ search: string }>();
  const debouncedSearchQuery = useDebounce(watch('search'), 600);
  const { data, isLoading, isFetching } = useSearch(debouncedSearchQuery);
  const navigate = useNavigate();
  const onSelectSymbol = (symbol: string) => {
    navigate(ROUTES.TICKER(symbol));
    reset();
  };
  return (
    <Controller
      control={control}
      name='search'
      render={({ field: { value, onChange } }) => (
        <InputWithDropdown
          inputProps={{ placeholder: 'Ticker...', value, onChange }}
          showDropdown={!isLoading && data}
          isLoading={isFetching}
          className={className}
        >
          {!isLoading &&
            data &&
            data.length !== 0 &&
            data?.map((it: any) => (
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
  );
};

export default SearchBar;
