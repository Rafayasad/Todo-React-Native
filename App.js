import React from 'react';
import {Text , View, ScrollView, SafeAreaView, StyleSheet,Image} from 'react-native'
import { Button, TextInput, List, FAB, IconButton} from 'react-native-paper';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App(){
  const [text, setText] = useState(null);
  const [todos,setTodos] = useState([])

  const addItem = () =>{
    const tempTodo = [...todos]
    tempTodo.push(text)
    setTodos(tempTodo)
    console.log(tempTodo)
    setText('')
  }

  const deleteItem = (i) =>{
    todos.splice(i,1)
    setTodos([...todos])
  }

  return(
    <SafeAreaView style={{height:'100%'}}>
      <ScrollView>
    <View>
      {/* <Text style={{fontWeight:'bold',alignSelf:"center",fontSize:30,color:'grey'}}>TODO</Text> */}
      <Image source={require('./assets/todo.png')} />
      
      <TextInput
      label="Todo"
      value={text}
      onChangeText={text=>setText(text)}
      mode='outlined'
      placeholder='Enter Your Todo'
      style={{width:300,alignSelf:'center',marginTop:10}}
      />

    {todos.map((value,index)=>{
      return( 
        <View style={{flex:1,flexDirection:'row',paddingVertical:10,paddingHorizontal:30}}>

      <Text style={{marginTop:15,marginLeft:15}}>{value}</Text>

      <IconButton
    icon={require('./assets/delete.png')}
    color='blue'
    size={20}
    onPress={() => deleteItem(index)}
      />

      </View>
      )
    })}

    </View>
      </ScrollView>

    <View style={{alignSelf:'center'}}>
      <FAB
      style={styles.fab}
      large
      icon={require('./assets/plus.png')}
      onPress={addItem}
  />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fab: {
    alignSelf:'center',
    marginBottom:40,
    backgroundColor:'#7257AB'
  },
})