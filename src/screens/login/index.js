import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { container, titleContainer, cryptoText, pokeText } from "./styles";
import InputText from "../../components/input-text";
import ButtonMain from "../../components/button-main";
import { useDispatch } from "react-redux";
import { getUser, setMoves } from "../../store/userStore";
import store from "../../store";

export const Login = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("");
  const [password, setPassword] = useState("");
  const { user, moves} = store.getState();

  useEffect(() => {
    dispatch(setMoves(user.user?.moves))
  },[user.user]);

  const handleLogin = async () => {
   await dispatch(getUser(pokemon.toLowerCase()));
  };
  return (
    <SafeAreaView style={container}>
      <View style={titleContainer}>
        <Text style={cryptoText}> Crypto </Text>
        <Text style={pokeText}> Poke </Text>
      </View>
      <InputText
        placeholder="Pokémon"
        type="default"
        secureText={false}
        value={pokemon}
        editable
        onChangeText={(value) => setPokemon(value)}
      />
      <InputText
        placeholder="Senha"
        type="default"
        secureText={true}
        value={password}
        editable
        onChangeText={(value) => setPassword(value)}
      />
      <ButtonMain title={"Login"} onPress={handleLogin} />
    </SafeAreaView>
  );
};
