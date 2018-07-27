import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableHighlight } from 'react-native';
import { getJobs } from './../networking/API';

const img = require('./../assets/images/logo-h-vjobs.png');
export default class JobList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jobs: []}
  }

  static navigationOptions = {
    title: 'VJobs'
  };

  componentDidMount() {
    getJobs()
    .then(jobs => this.setState({jobs}))
    .catch(error => console.log(error))
  }

  renderHeader() {
  return(
    <Image
    style={{margin:16, alignSelf:'center'}}
    source={img}/>
  )
}

  renderItem(vaga) {
    return (
      <TouchableHighlight
      onPress={() => this.props.navigation.navigate('JobDetails', {job: vaga})}>
      <Text style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 48,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#eee'}}>{vaga.name}</Text>
        </TouchableHighlight>
    );
  }
 

  renderList(){
    const vagas = [
      { name: 'Vaga ABC', id: '1'},
      { name: 'Vaga 2', id: '2'},
      { name: 'Vaga 3', id: '3'},
      { name: 'Vaga 4', id: '4'},
      { name: 'Vaga 5', id: '5'},
      { name: 'Vaga 6', id: '6'},
      { name: 'Vaga 7', id: '7'}
    ]
    const separatorStyle = {
      flexGrow: 1, height: 5, backgroundColor: '#fff'
    }

    return (
      <FlatList data={this.state.jobs}
        style={{flex: 1, backgroundColor: 'white'}}
        renderItem={({ item }) => this.renderItem(item)}
        ListHeaderComponent={() => this.renderHeader()}
        ItemSeparatorComponent={() => <View style={separatorStyle}/>}
        keyExtractor={(item) => `${item.id}`}
      />);
  }
 
  render() {
    return (
      <SafeAreaView style={styles.container}>
       { this.renderList() }
     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff'
  },
});
