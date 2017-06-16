import React from 'react';
import SignMenu from './SignMenu';

export default class First extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <SignMenu/>
                {this.props.children}
            </div>
        )
    }
}