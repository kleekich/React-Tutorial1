import React from 'react';
import {render} from 'react-dom';
import Contact from './Contact';

class ContactsList extends React.Component {
	render() {
		return (
				<ul>
					{this.props.contacts.map((cont) => {
						return <Contact contact={cont} key={cont.id} />
					})}
				</ul>
			)
	}
}


export default ContactsList;