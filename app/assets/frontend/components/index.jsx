import React from 'react'
import TweetBox from "./TweetBox";
import TweetsList from "./TweetsList";
import TweetStore from "../stores/TweetStore";

import TweetActions from "../actions/TweetActions";
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

// let mockTweets = [
//   { id: 1, name: "Rafael Lugli", body: "Hava a nice day" },
//   { id: 2, name: "Rodolfo Lugli", body: "Hava a good day" },
//   { id: 3, name: "Andre Lugli", body: "Hava a sad day" }
// ]

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return(
      <div className="container">
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}
