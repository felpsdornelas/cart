// Cart.js
import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export const Cart = ({ items, addItemToCart, removeItemFromCart, getTotalPrice }) => {
  console.log(items)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>

      {items.length === 0 ? (
        <Text style={styles.empty}>Carrinho vazio 😢</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.product.name}</Text>
                <Text style={styles.quantity}>Qtd: {item.qty}</Text>
                <View style={styles.buttons}>
                  <Button title="+" onPress={() => addItemToCart(item.id)} />
                  <Button title="-" onPress={() => removeItemFromCart(item.id)} />
                </View>
                <Text style={styles.price}>
                  R$ {(item.product.price * item.qty).toFixed(2)}
                </Text>
              </View>
            )}
          />
          <Text style={styles.total}>
            Total: R$ {getTotalPrice().toFixed(2)}
          </Text>
        </>
      )}
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
  price: { fontSize: 16, fontWeight: "600", marginLeft: 8 },
  total: { fontSize: 20, fontWeight: "bold", marginTop: 20 },
  empty: { fontSize: 16, color: "#666", textAlign: "center", marginTop: 40 },
});