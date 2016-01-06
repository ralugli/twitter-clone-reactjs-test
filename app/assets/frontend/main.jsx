import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

// let mockTweets = [
//   { id: 1, name: "Rafael Lugli", body: "Hava a nice day" },
//   { id: 2, name: "Rodolfo Lugli", body: "Hava a good day" },
//   { id: 3, name: "Andre Lugli", body: "Hava a sad day" }
// ]

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = { tweetsList: [] }
  }

  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Gest', body: tweetToAdd })
    this.setState({ tweetsList: newTweetsList })
  }

  render() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  )
}

$(documentReady);
