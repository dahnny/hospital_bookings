import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Platform,
  Alert,
} from "react-native";
// import Toast from "react-native-root-toast";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import Constants from "expo-constants";
import { uploadBooking, uploadImage } from "../utils/services";

const Booking = ({navigation,route}) => {
  const [image, setImage] = useState(null);
  const {hospitalId} = route.params;
  useEffect(async () => {
    if (Platform.OS !== "web") {
      const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status != "granted") {
        alert("Permission denied");
      }
    }
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", phone: "", illness: "" }}
        onSubmit={async (values) => {
          const { name, email, phone, illness } = values;
          if (!name || !email || !phone || !illness || !image) return;
          console.log(name, email, phone, illness, image);
          var imageData = new FormData();
          imageData.append("file", image.uri);
          imageData.append("upload_preset", "ogbuti");
          imageData.append("api_key", "566727145985371");
          const { data } = await uploadImage(imageData);
          const response = await uploadBooking({
            name,
            email,
            phone,
            illness,
            photo: data.secure_url,
            hospitalId
          });
          navigation.goBack();
          Alert.alert("Booking successful")
          // Toast.show('Booking created successfully');
        }}
      >
        {(props) => (
          <View>
            <Button title="Pick Image" color="#841584" onPress={pickImage} />
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              onChangeText={props.handleChange("phone")}
              value={props.values.phone}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              value={props.values.name}
            />
            <TextInput
              multiline
              style={styles.input}
              placeholder="Illness"
              onChangeText={props.handleChange("illness")}
              value={props.values.illness}
            />
            {image && (
              <Image
                source={{ uri: image.uri }}
                style={{
                  width: "100%",
                  height: 300,
                }}
              />
            )}
            <Button
              title="submit"
              color="#841584"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#E8EAED",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

export default Booking;
