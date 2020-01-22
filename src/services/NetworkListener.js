import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

class NetworkListener extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      netInfo: {},
    };
  }

  componentDidMount() {
    /* Subscribe to network change*/
    this.unsubscribe = NetInfo.addEventListener(state => {
      this.setState({
        netInfo: state,
      });
      this.props.updateNetwork(state.isConnected);
    });
  }
  componentWillUnmount() {
    /* unsubscribe to network change*/
    this.unsubscribe();
    this.props.updateNetwork(false);
  }

  render() {
    const {network} = this.props;

    if (network.isConnected) return <View />;
    return (
      <View style={styles.connectionStatus}>
        <Text style={styles.connectionText}>No Internet connection</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  connectionStatus: {
    position: 'absolute',
    bottom: 0,
    height: '05%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return {
    network: state.network,
  };
};

const mapDispatchToProps = dispatch => {
  const {actions} = require('../redux/reducer/Network');

  return {
    updateNetwork: isConnected => dispatch(actions.updateNetwork(isConnected)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetworkListener);
