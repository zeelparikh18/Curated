import React from 'react';

// components
import SearchInput from './SearchInput';
import CategoriesSelector from './CategoriesSelector';

class SearchBoxContainer extends React.Component {
    render() {
        return (
            <div className="searchBox">
                <SearchInput />
                <CategoriesSelector/>
            </div>
        )
    }
}

export default SearchBoxContainer;