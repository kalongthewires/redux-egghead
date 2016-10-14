import React, { PropTypes } from 'react';

const { func, string } = PropTypes;

const FilterLink = ({ children, filter, onFilterClick }) => {
    return (
        <a href='#' onFilterClick={(e) => {
            e.preventDefault();
            onFilterClick(filter);
        }}>{ children }</a>
    );
};

FilterLink.propTypes = {
    children: string.isRequired,
    filter: string.isRequired,
    onFilterClick: func.isRequired,
};

export default FilterLink;
