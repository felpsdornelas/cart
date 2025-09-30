import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

export const CartScreen = () => {
     const { items, addItemToCart, removeItemFromCart } = useContext(CartContext);

     return (
          <View style={styles.container}>
               <Text style={styles.title}>Seu Carrinho</Text>
               <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                         <View style={styles.itemContainer}>
                              <Text style={styles.name}>{item.name}</Text>
                              <Text style={styles.quantity}>Qtd: {item.quantity}</Text>
                              <View style={styles.buttons}>
                                   <Button title="+" onPress={() => addItemToCart(item)} />
                                   <Button title="-" onPress={() => removeItemFromCart(item.id)} />
                              </View>
                         </View>
                    )}
               />
          </View>
     );
};

const styles = StyleSheet.create({
     container: { flex: 1, padding: 16 },
     title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
     itemContainer: {
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 12,
          justifyContent: "space-between",
     },
     name: { fontSize: 18, flex: 1 },
     quantity: { fontSize: 16, marginHorizontal: 8 },
     buttons: { flexDirection: "row" },
});