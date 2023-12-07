import React from "react";
import { Text, View, StyleSheet} from "react-native";


export default function Perfil(){

    return  <View style={styles.container}>
                <Text>Perfil</Text>
            </View>
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#fff",
      flexDirection: "row"
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });