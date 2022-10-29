import * as React from "react";
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { Button, Icon } from "react-native-magnus";

import List from "../components/app/MealDetail/List";
import Subtitle from "../components/app/MealDetail/Subtitle";
import MealDetails from "../components/app/MealDetails";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/app/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPressFct={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <Text style={styles.titleMeal}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  titleMeal: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuter: {
    alignItems: "center",
  },
});
