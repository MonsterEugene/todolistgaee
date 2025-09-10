import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';




export default function App() {
  const [temp, setTemp] = useState("")
  const [idForbuttons, setIdForButtons]= useState(0);
  const [rigger, setRigger] = useState([
    {todo: "test thing" },
    {todo: "siggggggg" }]);

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.toop}>
        <Text style={styles.title}> My TODOODLE </Text>
      </View>
      <View style= {styles.miid}>
        <TextInput style={styles.ti} placeholder='   write todo' onChangeText={(input) => {
          setTemp(input);
          //onChange was wrong idk the diffrence
        }}></TextInput>
        <View style={styles.buttontoop}>
        <Button  color="black" title='addToDo' onPress={() => {
          //console.log('thisis wrong fr')
          if (temp !=""){
            console.log("current: " + idForbuttons + ", next should be: " + "im too lazy for this");
            setIdForButtons(idForbuttons +1);
            setRigger([...rigger, {id: idForbuttons, todo: temp }]);
          }
        }}></Button>
        </View>
      </View>
      <View style={styles.boot}>
        <FlatList data={rigger}
          renderItem={(itemData) => {
            return <View style={styles.buttonlist}><Button style={styles.simp} color='white' title={itemData.item.todo} onPress={() => {
              //delete itself somehow
              //setRigger([...rigger])
              
            }}></Button></View>
          }
          }></FlatList>
      </View>

  
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#392953ff',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 100,

  },
  ti: {
    backgroundColor: 'lightgrey',
    //textDecorationColor: 'black',
    outlineColor:"black",
    outlineWidth: 1,
    outlineStyle: 'solid',
    borderRadius: 10,
    //marginBottom: 10

  },
  toop: {
    flex: 1,
    alignContent: 'center',
    minHeight: 40,
    backgroundColor: 'orange',
    marginTop: 50,
    borderRadius: 30,
  },
  miid: {
    marginTop: 5,
    backgroundColor: 'grey',
    

  },
  boot: {
    flex: 1
  },
  buttonlist:{
    marginTop: 5, 
    backgroundColor: 'lightgrey',
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dotted',
    borderRadius: 5,
    color:'black',

  },
  buttontoop:{
    marginTop: 5,
    backgroundColor: "orange",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 3,
    //color:'black'
  },
  title:{
    //marginTop: 100,
    color:'black',
    fontSize: 30,
    //borderRadius:10
  },
  simp:{
    color: 'black',

  }

});
