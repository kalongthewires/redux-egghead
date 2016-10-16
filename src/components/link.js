import React, { PropTypes } from 'react';

const { bool, func, string } = PropTypes;

const Link = ({ active, children, onLinkClick }) => {
    if (active) {
        return <span>{ children }</span>;
    }

    return (
        <a href='#' onClick={(e) => {
            e.preventDefault();
            onLinkClick();
        }}>{ children }</a>
    );
};

Link.propTypes = {
    active: bool.isRequired,
    children: string.isRequired,
    onLinkClick: func.isRequired,
};

export default Link;
