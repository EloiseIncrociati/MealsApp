import * as React from "react";
import { useLayoutEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import MealItem from "../components/app/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const catTitle = CATEGORIES.find((category) => category.id === catId).title;

  useLayoutEffect(() => {
    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItems(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
}

export default MealsOverviewScreen;
