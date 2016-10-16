import React from 'react';
import FilterLink from './../containers/filter-link';

const Footer = () => (
    <ul>
        <li>
            <FilterLink
                filter='SHOW_ALL'
            >
                All
            </FilterLink>
        </li>
        <li>
            <FilterLink
                filter='SHOW_ACTIVE'
            >
                Active
            </FilterLink>
        </li>
        <li>
            <FilterLink
                filter='SHOW_COMPLETED'
            >
                Completed
            </FilterLink>
        </li>
    </ul>
);

export default Footer;
