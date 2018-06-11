import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Topic.css'
export default class Topic extends Component {

	static propTypes = {
		topic 		: PropTypes.object.isRequired,
		onDelete: PropTypes.function,
		onUpvote: PropTypes.function,
		onDownvote: PropTypes.function,
	};

	constructor(props){
		super(props);
	}

	render() {
		const {topic} = this.props;

		return (
			<div class="topic" key={topic['id']} >

						<div class="topic-title">{topic['topic']}</div>
						<div class="topic-date">{topic['created_at']}</div>
	
				</div>
			</div>
		)
	}


}
