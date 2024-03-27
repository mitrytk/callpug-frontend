import React, { useEffect, useState} from "react";
import { nanoid } from "nanoid";
import {
  IngredientsContainer,
  ListIngredients,
  AddIngredientButton,
} from "./Ingredients.styled";
import { IngredientsI, IngredientsProps } from "./Ingredients.types";

import { Ingredient } from "../Ingredient/Ingredient";



export const Ingredients = ({handleChangeIngredientList}:IngredientsProps) => {
  const [ ingredientsData, setIngredientsData] = useState<IngredientsI[]>([]);

  const handleChangeIngredient = (ingredient: IngredientsI) => {
    setIngredientsData((prevIngredientsData) => {
      const isInArray = prevIngredientsData.find(el=> el.id === ingredient.id)

       if (!isInArray) {
        return [...prevIngredientsData, ingredient]
       }

      const UpdatedArray = prevIngredientsData.map((item: IngredientsI) => {
        if(item.id === ingredient.id) {
          return {...ingredient};
        }
        return item;
      })
      
      return [...UpdatedArray]
    })
  };

  useEffect(() => {
    handleChangeIngredientList(ingredientsData);
    
  }, [handleChangeIngredientList, ingredientsData]);

  const [ingredientsList, setIngredientsList] = useState<JSX.Element[]>([
    <Ingredient
      key={nanoid(5)}
      handleChangeIngredient={handleChangeIngredient}
    />,
  ]);

  const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIngredientsList((prevIngredientsList) => [
      ...prevIngredientsList,
      <Ingredient
        key={prevIngredientsList.length}
        handleChangeIngredient={handleChangeIngredient}
      />,
    ]);
  };

  return (
    <IngredientsContainer>
      <ListIngredients>{ingredientsList}</ListIngredients>
      <AddIngredientButton onClick={handleAddIngredient}>
        Добавить еще
      </AddIngredientButton>
    </IngredientsContainer>
  );
};
