import {StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: 'grey',
      borderWidth: 0.5,
      padding: 15,
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor: 'rgba(50, 50, 50, 0.1)',
    },
    warning: {
      color: 'red',
      fontSize: 20,
      alignSelf: 'center',
      marginBottom: 20,
    },
    cancel: {
      borderWidth: 0.5,
      borderColor: 'grey',
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'rgba(50, 50, 50, 0.3)',
    },
    confirm: {
      borderWidth: 0.5,
      borderColor: 'red',
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 0, 0, 0.4)',
    },
    dialog: {
      flex: 1,
      position: 'absolute',
      backgroundColor: 'rgba(50, 50, 50, 0.4)',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    dialogbox: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 20,
      justifyContent: 'space-between',
    },
  });

  export default styles;