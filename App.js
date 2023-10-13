import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';

export default function App() {

  const[darkMode, setDarkMode] = useState(false)
  const buttons = ['C', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', '.', 0, '+/-', '=']

  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      results: {
        backgroundColor: darkMode ? '#282f3b' : '#E9E8E8',
        width: '100%',
        minHeight: 300,
        alignItems: 'flex-end',
        justifyContent:'flex-end'
      },

      resultsText: {
        color: darkMode ? '#f5f5f5' : '#282f38',
        margin: 10,
        fontSize: 38
      },

      themeButtom: {
        alignSelf: 'flex-start',
        bottom: 120,
        margin: 15,
        backgroundColor: darkMode ? '#7b8084' : '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
      },

      buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: darkMode ? '#282f3b' :'#E9E8E8'
      },

      button: {
        borderColor: darkMode ? '#3f445b' : '#e5e5e5',
        borderWidth: 0.3,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 90,
        minHeight: 90,
        flex: 2,
        borderRadius: 100,
        margin: 3.4,
      },

      textButton: {
        color: darkMode ? '#D2D3D4' : '#444343',
        fontSize: 25,
        fontWeight: "500",
        fontFamily: '',
      }
    }
  )

  return(
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButtom}>
          <Entypo 
            name={darkMode ? 'light-up' : 'moon'} 
            size={24} 
            color={darkMode ? 'white' : 'black'} 
            onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} 
          />
        </TouchableOpacity>
        <Text style={styles.resultsText}>2 + 2 = 5</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' 
          ? 
          <TouchableOpacity 
            key={button} 
            style={[styles.button, 
              {backgroundColor: '#FFAB5C'}]}>
            <Text style={[styles.textButton]}>{button}</Text>
          </TouchableOpacity>

          : 
          <TouchableOpacity 
            key={button} 
            style={[styles.button, 
              {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#fff' : darkMode == true ? '#414853' : '#C6C5C5'}]}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}