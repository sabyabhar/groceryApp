import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Home=(props) => {
    return(
        <View>
      <Button style={styles.Orders} mode="outlined" onPress={() => props.navigation.navigate("OrderList")}>
       Orders
     </Button>
     <Button style={styles.Orders} mode="outlined" onPress={() => props.navigation.navigate("CreateOrder")}>
       Order
     </Button>
      </View>
    );
}

const styles=StyleSheet.create({
  Orders: {
      alignSelf: 'center',
      width: 250,
      height: 60,
      justifyContent: "center",
      marginTop: 150

  }
})
export default Home;