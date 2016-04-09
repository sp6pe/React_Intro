//create new component
import React from 'react';
import ReactDOM from 'react-DOM';

const App = () => {
	return <div> Hi! </div>;
}

ReactDOM.render(<App />, document.querySelector('.container')); //need to pass instance of class, not class itself