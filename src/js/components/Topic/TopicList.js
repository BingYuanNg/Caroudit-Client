import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';

export default class TopicList extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		type: PropTypes.string.isRequired,
		paging: PropTypes.object,
		offset: PropTypes.number,
		limit: PropTypes.number,
		onDelete: PropTypes.function,
		onUpvote: PropTypes.function,
		onDownvote: PropTypes.function,
		onSetOffsetLimit: PropTypes.function,
		refreshList: PropTypes.function,
	};

	constructor(props){
		super(props);
	}

	renderPaginateButton(){
		const {offset, limit, paging} = this.props
		var buttons = []
		
		return (
			<div>
			{ paging.prev &&
				<button onClick={this.refresh.bind(this, offset-limit, limit)}>Previous</button>
			}
			{ paging.next &&
				<button onClick={this.refresh.bind(this, offset+limit, limit)}>Next</button>
			}
			</div>
		)
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

				{ type =="list" && 
					this.renderPaginateButton()
				}
			</div>
		)
	}


	refresh(offset,limit=10){
		this.props.onSetOffsetLimit({offset:offset, limit:limit})
		this.props.refreshList(offset,limit);
	}
}