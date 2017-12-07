import React from 'react';

import SEARCH from '../assets/search.svg';

class SearchInput extends React.Component {
    render() {
        return (
            <div className="searchInputContainer">
                <input type="text" placeholder="Search Products Here"/>
                <img src={SEARCH} />
            </div>
        );
    }
}

export default SearchInput;