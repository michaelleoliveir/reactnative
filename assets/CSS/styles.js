import React from "react"

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
export default styles;