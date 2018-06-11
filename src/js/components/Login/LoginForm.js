import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
	
	static propTypes = {
		input 		: PropTypes.object.isRequired,
		onChange 	: PropTypes.func.isRequired,
		onSubmit 	: PropTypes.func.isRequired,
	};

	constructor(props){
		super(props);
		this._onChange = this._onChange.bind(this);
	}

	render() {
		const {input} = this.props;
		return (
			<div>
				<input 
					type="text" 
					value={input['username'] || ''} 
					name="username"
					onChange={this._onChange}
				/>
				<input 
					type="password" 
					value={input['password'] || ''} 
					name="password"
					onChange={this._onChange}			
				/>
				<input type="submit" value="Login"/>
			</div>
		)
	}

    _onChange(e) {
		const { input } = this.props;
        input[ e.target.name ] = e.target.value;

        this.props.onChange(input);
    }
}