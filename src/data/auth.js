import * as SecureStore from "expo-secure-store";

const Auth = {
  saveToken: async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  },
  getValueFor: async (key, callBack) => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      callBack(true);
    } else {
      callBack(false);
    }
  },
  deleteToken: async (key) => {
    await SecureStore.deleteItemAsync(key);
  },
};

export default Auth;
