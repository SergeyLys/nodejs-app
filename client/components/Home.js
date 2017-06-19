import React from 'react';
import config from '../../config';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    static onEnter(nextState, replace) {
        replace('/login');
        // replaceState({ nextPathname: nextState.location.pathname }, '/login');

        const xhr = new XMLHttpRequest();

        xhr.open('GET', `${config.host}/api/current-user`, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            } else {
                console.log(JSON.parse(xhr.responseText));
            }
        };

        // xhr.send(`Authorization=`);


    }

    render() {
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}