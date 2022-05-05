import { baseUrl } from "./constants";
import axios from "axios";
import Toast from "react-native-root-toast";

export const findAllHospitals = async () => {
  try {
    console.log(baseUrl);
    const response = await axios.get(`${baseUrl}/hospitals`);
    return response.data;
  } catch (error) {
    console.log(error);
    Toast.show("Error fetching data", {error})
  }
};

export const uploadBooking = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/bookings`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (data) => {
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dogbuti/image/upload`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
