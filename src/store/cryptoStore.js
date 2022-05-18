
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCrypto = () => async (dispatch) => {
  axios
    .get('https://poloniex.com/public?command=returnTicker')
    .then((res) => {
      return dispatch(setCrypto(res.data));
    })
    .catch((error) => {
      return error.response;
    });
};

const cryptoSlice = createSlice({
  name: "cryptoSlice",
  initialState: {
    data: null,
  },
  reducers: {
    setCrypto: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
