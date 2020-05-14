import React, {Component} from 'react';
import {View, Text} from 'react-native';

class HomeBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text
          onPress={() => {
            console.log(this.props);
          }}>
          Home Screen
        </Text>
      </View>
    );
  }
}

export default HomeBoard;
