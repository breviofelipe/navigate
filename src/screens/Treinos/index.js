import React from "react";
import { Text, View, StyleSheet} from "react-native";
import HeaderComponent from "../../components/HeaderComponent";

export default function Treinos(){

                return  <>                           
                        <HeaderComponent title={"Treinos"} />
                        <View style={styles.container}>
                        </View></>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });