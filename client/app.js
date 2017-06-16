import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


// class App extends React.Component {
//
//     handleSubmit() {
//         console.log()
//     }
//
//     render() {
//         fetch('http://localhost:8000/api/').then((data)=>{
//             console.log(data);
//         });
//         return(
//             <form onSubmit={::this.handleSubmit}>
//                 <input type="text"/>
//                 <button>Signu</button>
//             </form>
//         )
//     }
// }



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);