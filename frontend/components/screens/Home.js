import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Hospital from "../widgets/Hospital";
import { findAllHospitals } from "../utils/services";

const Home = ({navigation, route}) => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    findAllHospitals()
      .then(({ data }) => {
        console.log(data);
        setHospitals(data);
        console.log(hospitals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {hospitals.map(({ id, name, address, doctorAvailable, image }) => (
            <Hospital
              key={id}
              id = {id}
              name={name}
              address={address}
              doctorAvailable={doctorAvailable}
              image={image}
              navigation={navigation}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
});
export default Home;
