import { StatusBar } from 'expo-status-bar';
import { FlatList, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';




export default function App() {
  const [temp, setTemp] = useState("")
  const [rigger, setRigger] = useState([
    {todo: "test thing" },
    {todo: "siggggggg" }]);

  return (
    <View style={styles.container}>
      <View>
        <Text>My TODOODLE</Text>
      </View>
      <View>
        <TextInput style={styles.ti} placeholder='write todo' onChangeText={(input) => {
          setTemp(input);
          //onChange was wrong idk the diffrence
        }}></TextInput>
        <Button title='addToDo' onPress={() => {
          //console.log('thisis wrong fr')
          if (temp !=""){
            setRigger([...rigger, {todo: temp }]);
          }
        }}></Button>
      </View>
      <View>
        <FlatList data={rigger}
          renderItem={(itemData) => {
            return <Button id={1} title={itemData.item.todo} onPress={() => {
              //delete itself somehow
              //setRigger([...rigger])
              console.log("idk");

            }}></Button>
          }
          }></FlatList>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  ti: {

  },
  toop: {
    flex: 1,
    alignContent: 'center',
    height: 100,
    backgroundColor: 'orange',

  },
  miid: {

  },
  boot: {
    flex: 1
  }


});
