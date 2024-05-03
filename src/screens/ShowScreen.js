import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather, EvilIcons } from "@expo/vector-icons";

const ShowScreen = (props) => {
  const { route } = props;
  const { navigation } = props;

  const id = route.params.id;
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    props.navigation.setOptions({
      title: "Blog Details",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: id })}
        >
          <EvilIcons name="pencil" size={35} style={{ marginRight: 10 }} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
