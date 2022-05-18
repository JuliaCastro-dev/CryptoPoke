import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { container, titleContainer, cryptoText, pokeText } from "./styles";
import InputText from "../../components/input-text";
import ButtonMain from "../../components/button-main";
import { useDispatch } from "react-redux";
import { getUser, setMoves } from "../../store/userStore";
import store from "../../store";
import _ from "lodash";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const [pokemon, setPokemon] = useState("");
  const [password, setPassword] = useState("");
  const _navigation = useNavigation();
  const { user, moves } = store.getState();

  const handleLogin = () => {
  store.dispatch(getUser(pokemon.toLowerCase()));
  /*    
    _navigation.navigate("ListCrypto"); */

    if(_.some(user.moves, m => m.move.name === pokemon)){
      console.log('login')
    }
    else{
      console.log(_.some(user.moves, m => m.move.name === pokemon));
    }
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
