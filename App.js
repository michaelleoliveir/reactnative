import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';

export default function App() {

  const[darkMode, setDarkMode] = useState(false)
  
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', '.', 0, '+/-', '=']

  return(
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButtom}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} />
        </TouchableOpacity>
        <Text style={styles.resultsText}>2 + 2 = 5</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' 
          ? <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#FFAB5C'}]}>
            <Text style={[styles.textButton]}>{button}</Text>
          </TouchableOpacity>

          : <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#fff' : darkMode == true ? '#414853' : '#ededed'}]}>
            <Text>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}