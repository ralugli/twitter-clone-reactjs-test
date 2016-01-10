import ServerActions from "./actions/ServerActions"

export default {

  getAllTweets() {
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.error(error) );
  },

  createTweet(body) {
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweet(rawTweet) )
    .error(error => console.error(error) );
  },

  getAllUsers() {
    $.get("/followers/random")
    .success( rawUsers => ServerActions.receivedUsers(rawUsers) )
    .error(error => console.error(error) );
  },

  followUser(userId) {
    $.post("/followers", { user_id: userId })
    .success( rawFollower => ServerActions.receivedOneFollower(rawFollower) )
    .error(error => console.error(error) );
  }

}
