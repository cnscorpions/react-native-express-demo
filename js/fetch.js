import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {actionCreators} from './actionCreators/todo';

const mapStateToProps = state => ({
  loading: state.posts.loading,
  error: state.posts.error,
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(actionCreators.fetchPosts()),
  clear: () => dispatch(actionCreators.clearPosts()),
});

const Posts = props => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [posts, setPosts] = useState([]);
  const {loading, error, posts, fetch, clear} = props;

  useEffect(() => {
    // fetchData();
    fetch();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts',
  //     );
  //     const posts = await response.json();
  //     setLoading(false);
  //     setPosts(posts);
  //   } catch (error) {
  //     setLoading(false);
  //     setError(true);
  //   }
  // };

  const refresh = () => {
    clear();
    fetch();
  };

  // 加载中...
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load posts!</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {posts && posts.length > 0 ? (
          posts.map(renderPost)
        ) : (
          <View style={styles.center}>
            <ActivityIndicator animating={true} />
          </View>
        )}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={refresh}>
        <Text>Refresh</Text>
      </TouchableOpacity>
    </>
  );
};

const renderPost = ({id, title, body}, i) => {
  return (
    <View key={id} style={styles.post}>
      <View style={styles.postNumber}>
        <Text>{i + 1}</Text>
      </View>
      <View style={styles.postContent}>
        <Text>{title}</Text>
      </View>
      <Text style={styles.postBody}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
