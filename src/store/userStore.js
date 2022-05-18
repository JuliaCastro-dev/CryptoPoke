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
    data: null,
    moves: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.moves = action.payload.moves;
    },
    setMoves: (state, action) => {
      state.moves = action.payload;
    },
  },
});

export const { setUser, setMoves } = userSlice.actions;
export default userSlice.reducer;
