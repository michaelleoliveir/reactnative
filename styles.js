import { StyleSheet } from "react-native";

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
        minHeight: 300,
        alignItems: 'flex-end',
        justifyContent:'flex-end'
      },

      resultsText: {
        margin: 10,
        fontSize: 25
      },

      themeButtom: {
        alignSelf: 'flex-start',
        bottom: 120,
        margin: 15,
        backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
      },

      buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },

      button: {
        borderColor: darkMode ? '#3f445b' : '#e5e5e5',
        borderWidth: 0.7,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 90,
        minHeight: 90,
        flex: 2,
      },
    }
)