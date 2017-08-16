import React from 'react';
import {render} from 'react-dom';
import ContactsList from  './ContactsList'


let contacts = [{
		id: 1,		
		name: 'Scott',
		phone: '555 333 5555'

	},
	{
		id: 2,
		name: 'Courtney',
		phone: '555 111 5555'

	},
	{
		id: 3,
		name: 'Tim',
		phone: '355 124 5555'

	},
	{
		id: 4,
		name: 'Jeff',
		phone: '464 333 2345'

	}]

class App extends React.Component {
	render() {
		return (
				<div>
					<h1>Contact List</h1>
					<ContactsList contacts={this.props.contacts} />
				</div>
			)
	}
}

render(<App contacts={contacts} />, document.getElementById('app'));