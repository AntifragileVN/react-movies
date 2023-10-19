import PropTypes from 'prop-types';
import { SearchForm, FormInput, SearchButton, Icon } from './SearchBar.styled';

const SearchBar = ({ onSearchSubmit, onChange, value }) => {
	return (
		<SearchForm onSubmit={(e) => onSearchSubmit(e)}>
			<FormInput
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<SearchButton type="submit">
				<Icon />
			</SearchButton>
		</SearchForm>
	);
};
SearchBar.propTypes = {
	onSearchSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default SearchBar;
