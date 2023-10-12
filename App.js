import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {

  const[darkMode, setDarkMode] = useState(false)

  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      results: {
        backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
        width: '100%',
        minHeight: 300
      }
    }
  )

  return(
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButtom}></TouchableOpacity>
        <Text style={styles.resultsText}>2 + 2 = 5</Text>
      </View>

      <View style={styles.buttom}>

      </View>
    </View>
  )
}