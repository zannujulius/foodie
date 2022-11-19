import React from "react";
import * as SecureStore from "expo-secure-store";

// getToken
export const getToken = async (key) => {
  let token = await SecureStore.getItemAsync(key);
  return token;
};

// SetToken
export const setToken = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
    return;
  } catch (err) {
    console.log(err.message);
  }
};

// delete token
export const deleteToken = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log("Token was deleted succesdfully");
  } catch (err) {
    console.log(err.message);
  }
};
