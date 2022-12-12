// containers/PostFormContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/PostActions';
// import PostForm from '../components/PostForm';

class PostFormContainer extends Component {   
    render() {
        return (
            <View>
                {/* <PostForm addPost={ this.props.addPost } /> */}
                </View>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (title, content) => {
            dispatch(addPost(title, content));
        }
    }
};

export default connect(null, mapDispatchToProps)(PostFormContainer);
