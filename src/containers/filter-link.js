import { connect } from 'react-redux';
import Link from './../components/link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLinkClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter,
            });
        }
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
