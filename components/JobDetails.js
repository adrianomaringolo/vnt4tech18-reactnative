import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

export default class JobDetails extends React.Component {

  static navigationOptions = {
  title: 'Detalhes'
};

getJob() {
  const {navigation} = this.props;
  const vaga = navigation.getParam('job', {});
  return vaga;
}

  render() {
    const job =this.getJob();
    return (
      <SafeAreaView style={styles.container}>
          <Text style={{fontWeight:'bold', padding: 16}}> {job.name} </Text>
          <Text style={{padding: 16}}> {job.description} </Text>
          <Text style={{padding: 16}}> {job.salary} </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});