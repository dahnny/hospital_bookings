import React from "react";

import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Hospital = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image
          source={{
            uri: props.image,
            height: "50%",
            width: "100%",
          }}
        />
        <Text style={styles.title}>Name: {props.name}</Text>
        <Text style={styles.title}>Address: {props.address}</Text>
        <Text style={styles.title}>
          Doctor Available: {props.doctorAvailable}
        </Text>

        <Button
          onPress={() =>
            props.navigation.navigate({
              name: "CreateBooking",
              params: { hospitalId: props.id },
            })
          }
          title="Book Now"
          color="#841584"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
    height: 400,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default Hospital;
