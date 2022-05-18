import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Button, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import store from "../../store";
import { getCrypto } from "../../store/cryptoStore";

export const ListCrypto = () => {
  const { crypto } = store.getState();
  useEffect(() => {
  }, [crypto.data]);

    useEffect(() => {
      store.dispatch(getCrypto());
  }, []);


  return (
    <ScrollView>
       <FlatList
          data={crypto?.data ?? []}
          renderItem={({ item }) => <Text>{item.id}</Text>}
        />
    </ScrollView>
  );
};
