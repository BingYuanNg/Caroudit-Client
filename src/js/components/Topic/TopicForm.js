import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './TopicForm.css'
export default class TopicForm extends Component {

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
					class="input_box"
					type="text"
					value={input['topic'] || ''}
					name="topic"
					onChange={this._onChange}
					maxlength="255"
				/>
				<div>Number of characters : { (input['topic'] || "").length }</div>
				<input type="button" value="Post" onClick={this.props.onSubmit}/>
			</div>
		)
	}

    _onChange(e) {
		const { input } = this.props;
        input[ e.target.name ] = e.target.value;

        this.props.onChange(input);
    }

}