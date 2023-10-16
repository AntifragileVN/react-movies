import PropTypes from 'prop-types';

const SearchBar = ({ onSearchSubmit, onChange, value }) => {
	return (
		<form onSubmit={(e) => onSearchSubmit(e)}>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<button type="submit">Search</button>
		</form>
	);
};
SearchBar.propTypes = {
	onSearchSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default SearchBar;
