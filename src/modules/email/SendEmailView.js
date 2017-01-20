import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import {
  Button,
  Grid,
  Col,
  Row,
  FormLabel,
  FormInput
} from 'react-native-elements';

const SendEmailView = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <Grid>
        <Row size={1} style={{backgroundColor: '#CCC', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
          <Col size={1}>
            <View>
              <FormLabel>Subject:</FormLabel>
              <FormInput onChangeText={console.log("")}/>
            </View>
          </Col>
        </Row>
        <Row size={3}>
          <View style={styles.details}>
              <FormLabel>Message:</FormLabel>
              <TextInput
                multiline = {true}
                numberOfLines = {10}
                onChangeText={console.log('name')}/>
          </View>
        </Row>
        <Row size={1}>
          <View style={styles.button}>
            <Button title='SEND' />
          </View>
        </Row>
      </Grid>
    );
  }
});

const styles = StyleSheet.create({
  details: {
    flex: 1,
    padding: 20
  },
  button: {
    flex: 1,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default SendEmailView;
