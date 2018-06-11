import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

export default class TopicList extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		type: PropTypes.string.isRequired,
		onDelete: PropTypes.function,
		onUpvote: PropTypes.function,
		onDownvote: PropTypes.function,
		onSetOffsetLimit: PropTypes.function,
		refreshList: PropTypes.function,
	};

	constructor(props){
		super(props);
	}

	generateList(items){
		let rows = [];
		for (var i = 0; i < items.length; i++) {
			rows.push( <Topic
					topic={items[i]}
					onDelete={this.props.onDelete}
					onUpvote={this.props.onUpvote}
					onDownvote={this.props.onDownvote}
				/> );
		}
		return rows;
	}

	render() {
		const {items, type, paging} = this.props;
		return (
			<div>
				<div class='topic_list'>
					{this.generateList(items)}
				</div>

				
			</div>
		)
	}


}
