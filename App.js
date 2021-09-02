import React from 'react';
import {Text , View, ScrollView, SafeAreaView, StyleSheet,Image} from 'react-native'
import { Button, TextInput, List, FAB, IconButton} from 'react-native-paper';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App(){
  const [text, setText] = useState(null);
  const [todos,setTodos] = useState([])
  const [isEdit,setIsEdit] = useState(false)
  const [currentIndex,setCurrentIndex] = useState(null)
  const [isDisabled,setIsDisabled] = useState(false)

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

  const editItem = (i) =>{
    setText(todos[i])
    setIsEdit(true)
    setIsDisabled(true)
    setCurrentIndex(i)
  }

  const updateItem = () =>{
    setIsDisabled(false)
    setIsEdit(false)
    const tempTodo = [...todos]
    tempTodo.splice(currentIndex,1,text)
    setTodos(tempTodo)
    console.log(tempTodo)
    setCurrentIndex(null)
    setText('')
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
    color='rgb(113, 86, 158)'
    size={20}
    onPress={() => deleteItem(index)}
      />

  {isDisabled ?
  
  <IconButton
  icon={require('./assets/edit.png')}
  color='rgb(113, 86, 158)'
  size={20}
  onPress={()=>editItem(index)}
  disabled={true}
  />
:
<>
<IconButton
  icon={require('./assets/edit.png')}
  color='rgb(113, 86, 158)'
  size={20}
  onPress={()=>editItem(index)}
  />
</>
}

      </View>
      )
    })}

    </View>
      </ScrollView>

    <View style={{alignSelf:'center'}}>
      
      {isEdit ?
      <FAB
      style={styles.fab}
      large
      icon={require('./assets/update.png')}
      onPress={updateItem}
      />

      :
      
      <FAB
      style={styles.fab}
      large
      icon={require('./assets/plus.png')}
      onPress={addItem}
      />
    }
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