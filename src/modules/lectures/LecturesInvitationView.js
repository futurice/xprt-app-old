import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  Button,
  Grid,
  Col,
  Row,
  Icon,
  FormLabel,
  FormInput,
  CheckBox
} from 'react-native-elements';

const LecturesInvitationView = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <Grid>
        <Row size={1} style={{backgroundColor: '#CCC', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
          <Col size={1}>
            <Image
                source={{uri: 'http://lorempixel.com/640/480'}}
                style={{width: 100, height: 100}} />
          </Col>
          <Col size={3} style={{marginLeft: 10}}>
            <View>
              <Text>
                {'Name'}
              </Text>
              <Text>
                {'Title/Company'}
              </Text>
              <View style={styles.tagsWrapper}>
                {['TAG', 'TAG', 'TAG'].map((tag, index) => (
                    <Text key={index} style={styles.subtitleText}>{tag}</Text>
                ))}
              </View>
            </View>
          </Col>
        </Row>
        <Row size={3}>
          <View style={styles.details}>
            <Text>
              {'Add some details about the lecture'}
            </Text>
              <FormLabel>Theme of the lecture:</FormLabel>
              <FormInput onChangeText={console.log('name')}/>
              <FormLabel>Date:</FormLabel>
              <FormInput onChangeText={console.log('date')}/>
              <FormLabel>Location:</FormLabel>
              <FormInput onChangeText={console.log('location')}/>
            <Text>
              {'I prefer to be contacted by:'}
            </Text>
            <CheckBox
              title='E-MAIL'
              checked={this.state.checked}
            />
            <CheckBox
              title='PHONE'
              checked={this.state.checked}
            />
          </View>
        </Row>
        <Row size={1}>
          <View style={styles.button}>
            <Button title='SEND LECTURE INVITATION' />
          </View>
        </Row>
      </Grid>
    );
  }
});

const styles = StyleSheet.create({
  tagsWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  subtitleText: {
    marginRight: 7,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginTop: 7
  },
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

export default LecturesInvitationView;
