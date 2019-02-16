import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './Error';
//import Form from './styles/Form';

class CreateItem extends Component {

uploadFile = async e => {
	console.log("ouploading");
	const files = e.target.files;
	const data = new FormData();
	data.append('file', files[0]);
	data.append('upload_present', 'sickfits');
	const res = await fetch('http://api.cloudinary.com/v1_1/reacttraining/image/upload/', {
		method: 'POST',
		body: 'some data'
	});

	if (res.status !== 200) {
		console.log("error");
		document.getElementById("error-container").style.display = "block";
	}
 };

	render() {
		return (
		<div>
			<div id="error-container"><Error/></div>
			<p/>
			<input type="file" id="file" name="file" placeholder="upload" required  onChange={this.uploadFile} />
		</div>		
		)
	}
}

export default CreateItem;