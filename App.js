import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';


export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")


  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const firstNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString())
        return
      case '-': 
        setCurrentNumber((firstNumber - lastNumber).toString())
        return
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString())
        return
      case '/': 
        setCurrentNumber((firstNumber / lastNumber).toString())
        return
      case '%': // o caso para cálculo da porcentagem
        setCurrentNumber((firstNumber * 0.01).toString());
        return
    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" | buttonPressed === "%" ){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
      case 'AC':
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
      case '+/-':
        return
    }

    setCurrentNumber(currentNumber + buttonPressed)
  }
  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      results: {
        backgroundColor: darkMode ? '#1B1F26' : '#E9E8E8',
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

      historyText:{
        color: darkMode ? "#B5B7BB" : "#7c7c7c",
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
      },

      themeButtom: {
        position: 'absolute',
        alignSelf: 'flex-start',
        bottom: 200,
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
        backgroundColor: darkMode ? '#1B1F26' :'#E9E8E8'
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
        color: darkMode ? '#F7F7F7' : '#444343',
        fontSize: 25,
        fontWeight: "500",
        fontFamily: '',
      },
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
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultsText}>{currentNumber}</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' 
          ? 
          <TouchableOpacity onPress={() => handleInput(button)}
            key={button} 
            style={[styles.button, 
              {backgroundColor: '#EF9B4D'}]}>
            <Text style={[styles.textButton]}>{button}</Text>
          </TouchableOpacity>
          : 
          <TouchableOpacity onPress={() => handleInput(button)}
            key={button} 
            style={[styles.button, 
              {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#fff' : darkMode == true ? '#4E545E' : '#C6C5C5'}]}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}