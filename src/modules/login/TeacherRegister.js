import * as NavigationState from '../navigation/NavigationState';
import * as AuthState from '../auth/AuthState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';

import {
  Button,
  ButtonGroup
} from 'react-native-elements';

import LoginForm from '../../components/LoginForm';

const TeacherLoginView = React.createClass({
  getInitialState() {
    return {
      selectedIndex: 0,
      name: '',
      title: '',
      school: '',
      address: '',
      description: '',
      username: '',
      email: '',
      password: ''
    };
  },

  updateIndex(selectedIndex) {
    this.setState({selectedIndex: selectedIndex});
  },

  doLogin(credentials) {
    // Always succeed with login for now
    this.props.dispatch(AuthState.onUserLoginSuccess());
    console.log(credentials);
  },

  render() {
    const buttons = ['Teacher', 'Expert'];
    const selectedIndex = this.state.selectedIndex;

    /* Photograph, name, title, school and address, brief description. Username, password. */
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}>
          <Text>Title:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            returnKeyType="next"
          />
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            returnKeyType="next"
          />
          <Text>School:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(school) => this.setState({school})}
            value={this.state.school}
            returnKeyType="next"
          />
          <Text>Address:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(address) => this.setState({address})}
            value={this.state.address}
            multiline={true}
            returnKeyType="next"
          />
          <Text>Description:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(description) => this.setState({description})}
            value={this.state.description}
            multiline={true}
            returnKeyType="next"
          />
          <Text>E-mail:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            returnKeyType="next"
            onSubmitEditing={() => this.refs['password'].focus()}
          />
          <Text>Username:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            returnKeyType="next"
          />
          <Text>Password:</Text>
          <TextInput
            ref="password"
            style={styles.textInput}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            value={this.state.password}
            returnKeyType="done"
            onSubmitEditing={() => this.props.submit(this.state) }
          />
          <Button
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            icon={{name: 'lock-open', color: 'black'}}
            title='Register'
            onPress={() => this.props.submit(this.state)}
          />
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white'
  },
  forgot: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
    marginBottom: 5
  },
  textInput: {
    height: 40,
    fontSize: 20
  },
  loginText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#AAAAAA',
    marginBottom: 10,
    padding: 5
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'yellow'
  },
  buttonTextStyle: {
    color: 'black'
  },
  buttonGroup: {
    height: 40,
    backgroundColor: 'white'
  },
  buttonGroupText: {
    color: '#CCCCCC',
    fontSize: 18
  }
});

export default TeacherLoginView;
