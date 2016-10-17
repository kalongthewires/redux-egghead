import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const { string } = PropTypes;

const FilterLink = ({ filter, children }) => (
    <Link
        to={ filter === 'all' ? '' : filter }
        activeStyle={ {
            textDecoration: 'none',
            color: '#000',
        } }
    >
        {children}
    </Link>
);

FilterLink.propTypes = {
    filter: string.isRequired,
    children: string.isRequired,
};

export default FilterLink;
