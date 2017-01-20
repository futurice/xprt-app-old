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
  Row,
  Icon
} from 'react-native-elements';

const ExpertsProfileView = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <Grid>
        <Row size={2}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Icon
                  raised
                  name='phone'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('call')} />
              <View style={styles.headerImage}>
                <Image
                    source={{uri: 'http://lorempixel.com/640/480'}}
                    style={{width: 100, height: 100}} />
              </View>
              <Icon
                  raised
                  name='envelope'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('email')} />
            </View>
            <Text>
              {'Name of an expert'}
            </Text>
            <Text>
              {'Title/Company'}
            </Text>
            <Text>
              {'Location'}
            </Text>
            <View style={styles.tagsWrapper}>
              {['TAG', 'TAG', 'TAG'].map((tag, index) => (
                  <Text key={index} style={styles.subtitleText}>{tag}</Text>
              ))}
            </View>
          </View>
        </Row>
        <Row size={1}>
          <View style={styles.office}>
            <View style={styles.checkIcon}>
              <Icon name='check' style={{padding: 20}} />
              <Text>
                {'Office visit possible'}
              </Text>
            </View>
            <Text>
              {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis commodo leo, non scelerisque tellus fermentum quis. In tincidunt nulla vitae quam cursus malesuada. '}
            </Text>
          </View>
        </Row>
        <Row size={1}>
          <View style={styles.recommendations}>
            <Text>
              {'RECOMMENDATIONS'}
            </Text>
            <Text>
              {'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis commodo leo, non scelerisque tellus fermentum quis. In tincidunt nulla vitae quam cursus malesuada."'}
            </Text>
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
  header: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  headerImage: {
    paddingHorizontal: 20
  },
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
  office: {
    flex: 1,
    padding: 20
  },
  checkIcon: {
    flexDirection: 'row'
  },
  recommendations: {
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

export default ExpertsProfileView;
