import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const UsersScreen = ({fetchUsers, user}) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {/* Conditional rendering based on data */}
      {!user.loading ? (
        <View style={styles.container}>
          <FlatList
            data={user.userData}
            renderItem={({item}) => (
              <View style={{margin: '2%', elevation: 1000, shadow: 5}}>
                <Text>{`Name is ${item.name} and the username is ${item.username}`}</Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

/* Importing action from redux */

import {fetchUsers} from '../../redux/reducer/UsersReducer';

/* mapDispatchToProps and mapStateToProps from redux*/

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUsers,
    },
    dispatch,
  );
};

const mapStateToProps = state => ({user: state.user});

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
