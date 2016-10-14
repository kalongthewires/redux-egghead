import React, { PropTypes } from 'react';
import FilterLink from './filter-link';

const { func, string } = PropTypes;

const Footer = ({ onFilterClick, currentFilter }) => {
    return (
        <ul>
            <li>
                <FilterLink
                    onFilterClick={ onFilterClick }
                    currentFilter={ currentFilter }
                    filter='SHOW_ALL'
                >
                    All
                </FilterLink>
            </li>
            <li>
                <FilterLink
                    onFilterClick={ onFilterClick }
                    currentFilter={ currentFilter }
                    filter='SHOW_ACTIVE'
                >
                    Active
                </FilterLink>
            </li>
            <li>
                <FilterLink
                    onFilterClick={ onFilterClick }
                    currentFilter={ currentFilter }
                    filter='SHOW_COMPLETED'
                >
                    Completed
                </FilterLink>
            </li>
        </ul>
    );
};

Footer.propTypes = {
    currentFilter: string.isRequired,
    onFilterClick: func.isRequired,
};

export default Footer;
