import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

class PostsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <View>
        <Text>Posts Screen</Text>
        <FlatList
          keyExtractor={(posts) => posts.id}
          data={posts}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    this.setState({
      posts: jsonData,
    });
  }
}

const styles = StyleSheet.create({});

export default PostsScreen;

// E
// Create a new screen called UsersScreen.js and display
// a list of 10 users with their names and email addresses

// M:
// Modify the PostsScreen.js to
// fetch and display only the first 10 posts and show each post's title and body.

// H:
// Create a new screen called UserPostsScreen.js that fetches and displays a
// list of users. When a user is tapped, navigate to a new screen called
// UserDetailsScreen.js and display that user's details (name, username, email, phone,
// and website) as well as their posts (title and body).
