import React from 'react';
import FilterLink from './../containers/filter-link';

const Footer = () => (
    <ul>
        <li>
            <FilterLink
                filter='all'
            >
                All
            </FilterLink>
        </li>
        <li>
            <FilterLink
                filter='active'
            >
                Active
            </FilterLink>
        </li>
        <li>
            <FilterLink
                filter='completed'
            >
                Completed
            </FilterLink>
        </li>
    </ul>
);

export default Footer;
