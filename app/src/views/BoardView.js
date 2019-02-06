import React from 'react';
import { connect } from 'react-redux';

import { getBrokenItems } from '../actions/HomeActions';
import ItemCard from '../components/ItemCard';

class BoardView extends React.Component {
    componentDidMount() {
        this.props.getBrokenItems();
    }

    render() { 
        return (
            <div>
                <h1>Unresolved Claims</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        items: state.home.items,
        pending: state.home.pending
    };
}

export default connect(mapStateToProps, { getBrokenItems})(BoardView);
