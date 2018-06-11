import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopicForm from '../components/Topic/TopicForm';
import TopicList from '../components/Topic/TopicList';
import { upvoteTopic, downvoteTopic, getTop} from '../api/TopicApi'
import { createTopic, getTopicList, deleteTopic } from '../api/TopicApi'

import css from './Home.css'
class Home extends Component {

  constructor() {
    super()
    this.state = {
      input: {},
      list : [],
      top  : [],
      message: "",
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
   }

  componentDidMount(){
  }

  _onChange(input){
    this.setState({input});
  }

  _onSubmit(){
    const {input} = this.state;
    createTopic(input)
      .then(res=> this.setState({message:"Topic Added"}))
      .then(this.setState({offset: 1, limit:this.state.limit}))
      .then(this.refreshList(this.state.offset, this.state.limit))
      .then(this.refreshLookup())
      .catch(err => alert(err))
  }


  render() {
    const {input, list, top, message} = this.state;
   var listing, button, title
    
      listing = <TopicList
        paging={paging}
        items={list}
        type='list'
        offset={offset}
        limit={limit}
        onSetOffsetLimit={this._onSetOffsetLimit}
        onDelete={this._onDeleteTopic}
        onUpvote={this._onUpvoteTopic}
        onDownvote={this._onDownvoteTopic}
        refreshList={this.refreshList}

      button = <button type="button" onClick={this.changeList.bind(this,'top')}>Top 20</button>
      title = "Recent"
    }
    return (
      <div class="main-container">
        {message}
        <TopicForm
          input={input}
          onChange={this._onChange}
          onSubmit={this._onSubmit}
        />
        <center><h2>{title}</h2></center>
        {listing}
      </div>
    );
  }
}

export default Home;
