import React, { PropTypes } from 'react';

const { func, string } = PropTypes;

const FilterLink = ({ children, currentFilter, filter, onFilterClick }) => {
    if (filter === currentFilter) {
        return <span>{ children }</span>;
    }

    return (
        <a href='#' onClick={(e) => {
            e.preventDefault();
            onFilterClick(filter);
        }}>{ children }</a>
    );
};

FilterLink.propTypes = {
    children: string.isRequired,
    currentFilter: string.isRequired,
    filter: string.isRequired,
    onFilterClick: func.isRequired,
};

export default FilterLink;
