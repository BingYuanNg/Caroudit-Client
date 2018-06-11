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

    this.refreshList = this.refreshList.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onDeleteTopic = this._onDeleteTopic.bind(this);
    this._onUpvoteTopic = this._onUpvoteTopic.bind(this);
    this._onDownvoteTopic = this._onDownvoteTopic.bind(this);
  }

  componentDidMount(){
    this.refreshList()
    this.refreshLookup()
  }

  refreshList(offset=1,limit=10) {
    getTopicList({offset: offset, limit: limit })
      .then(res=> { this.setState({list:res.result, paging:res.paging })} )
      .catch(err => alert(err));
  }

  refreshLookup(offset=1,limit=10) {
    getTop()
      .then(res=> { this.setState({top:res})} )
      .catch(err => alert(err));
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

  _onDeleteTopic(id){
    deleteTopic(id)
      .then(res=> this.setState({message:'Topic Deleted'}))
      .then(this.refreshList(this.state.offset, this.state.limit))
      .then(this.refreshLookup())
      .catch(err=>alert(err))
  }
  _onUpvoteTopic(id){
    upvoteTopic(id)
      .then(res=> this.setState({message:'Upvoted'}))
      .then(this.refreshList(this.state.offset, this.state.limit))
      .then(this.refreshLookup())
      .catch(err => alert(err))
  }
  _onDownvoteTopic(id){
    downvoteTopic(id)
      .then(res=> this.setState({message:'Downvoted'}))
      .then(this.refreshList(this.state.offset, this.state.limit))
      .then(this.refreshLookup())
      .catch(err => alert(err))
  }

  render() {
    const {input, list, top, message, paging, offset, limit} = this.state;
    const {now_showing} = this.state;
    var listing, button, title
    if(now_showing =="top"){
      listing = <TopicList
        items={top}
        type='top'
        onDelete={this._onDeleteTopic}
        onUpvote={this._onUpvoteTopic}
        onDownvote={this._onDownvoteTopic}
      />
      button = <button type="button" onClick={this.changeList.bind(this,'list')}>Get Recent</button>
      title = "Top 20" 
    }else{
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

      />
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
          onDelete={this._onDeleteTopic}
          onUpvote={this._onUpvoteTopic}
          onDownvote={this._onDownvoteTopic}
        />
        {button}
        <center><h2>{title}</h2></center>
        {listing}
      </div>
    );
  }
}

export default Home;
