import React from "react";
import { StyleSheet, View } from "react-native";
import TextComponent from "./TextComponent";
import colors from "../../colors";
import { DarkTheme } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';
export default function HeaderComponent({ text, title }) {

    return <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}} >
            <View style={styles.back}>{text && <TextComponent>{text}</TextComponent>}</View>
            <TextComponent style={styles.title}>{title}</TextComponent>
            <Ionicons style={styles.notification} name="notifications-outline" size={36} color={colors.green} />
            <Badge
            status="primary"
            value={10}
            containerStyle={{ position: 'absolute', top: 5, left: 60 }}
          />
    </View>
}

const styles = StyleSheet.create({
    title: {
        width: "70%",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 24,        
        backgroundColor: colors.background,
        fontWeight: "bold",
        padding: 5,        
      },
      notification: {
        textAlign: "center",
        width: "15%",
        borderRadius: 80,
      }, 
      back: {
        width: "15%",
        marginLeft: 5,
        marginTop: 15
      }
})