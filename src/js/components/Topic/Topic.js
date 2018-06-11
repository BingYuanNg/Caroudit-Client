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
				<div class="topic-votes">
					<i class="upvote far fa-thumbs-up" onClick={this.upvote.bind(this,topic['id'])}></i>
					{topic['votes']}
					<i class="downvote far fa-thumbs-down" onClick={this.downvote.bind(this,topic['id'])}></i>
				</div>
				<div class="topic-detail">
					<div class="topic-content">
						<div class="topic-title">{topic['topic']}</div>
						<div class="topic-date">{topic['created_at']}</div>
					</div>
					<div class="topic-delete">
						<i class="fas fa-trash" onClick={this.delete.bind(this,topic['id'])}></i>
					</div>
				</div>
			</div>
		)
	}

	upvote(id){
		this.props.onUpvote(id)
	}
	downvote(id){
		this.props.onDownvote(id)
	}
	delete(id){
		this.props.onDelete(id)
	}
}