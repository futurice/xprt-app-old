import React, {PropTypes} from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements'

export default React.createClass({
  displayName: 'LoginForm',
  propTypes: {
    submit: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      email: '',
      password: ''
    };
  },
  render() {
    return (
      <View>
        <Text>E-mail</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <Button
          icon={{name: 'lock-open'}}
          title="Log in"
          onPress={() => this.props.submit(this.state)}/>
      </View>
    );
  }
});
