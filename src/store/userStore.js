import { getPokemon } from "../services/api/poke";
import { createSlice } from "@reduxjs/toolkit";
import { apiPoke } from "../services/api";
import axios from "axios";

export const getUser = (name) => async (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      return dispatch(setUser(res.data));
    })
    .catch((error) => {
      return error.response;
    });
};

const userSlice = createSlice({
  name: "UserSlice",
  initialState: {
    user: null,
    moves: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setMoves: (state, action) => {
      state.moves = action.payload;
    },
  },
});

export const { setUser, setMoves } = userSlice.actions;
export default userSlice.reducer;
