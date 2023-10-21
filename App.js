import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import { getStyles } from './assets/CSS/styles';


export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']
  const style = getStyles(darkMode)  

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
        setCurrentNumber(((firstNumber * lastNumber) / 100).toString());
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
        setCurrentNumber(
          currentNumber.startsWith('-') ? (currentNumber * (-1)) : "-" + currentNumber
        );
        return;
    }
  
    setCurrentNumber(currentNumber + buttonPressed)
  }

   return(
    <View>
      <View style={style.results}>
        <TouchableOpacity style={style.themeButtom}>
          <Entypo 
            name={darkMode ? 'light-up' : 'moon'} 
            size={24} 
            color={darkMode ? 'white' : 'black'} 
            onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} 
          />
        </TouchableOpacity>
        <Text style={style.historyText}>{lastNumber}</Text>
        <Text style={style.resultsText}>{currentNumber}</Text>
      </View>

      <View style={style.buttons}>
        {buttons.map((button) => 
          button === '=' 
          ? 
          <TouchableOpacity onPress={() => handleInput(button)}
            key={button} 
            style={[style.button, 
              {backgroundColor: '#EF9B4D'}]}>
            <Text style={[style.textButton]}>{button}</Text>
          </TouchableOpacity>
          : 
          <TouchableOpacity onPress={() => handleInput(button)}
            key={button} 
            style={[style.button, 
              {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#fff' : darkMode == true ? '#4E545E' : '#C6C5C5'}]}>
            <Text style={style.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}