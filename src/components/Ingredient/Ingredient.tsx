import { ChangeEvent, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import {
  IngredientItem,
  InputIngredientName,
  InputIngredientQuantity,
  SelectContainer,
  SelectIngredientUnit,
  OptionIngredientUnit,
} from "./Ingredient.styled";

interface IngredientProps {
    handleChangeIngredient: (ingredient: {id: string, name: string, quanity: string, unit: string}) => void;
}

export const Ingredient = ({handleChangeIngredient}: IngredientProps) => {
    const [ingredient, setIngredient] = useState({id: nanoid(5), name: '', quanity: '', unit: 'things',});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setIngredient({...ingredient, [name]: value });
        
    };

    useEffect(() => {
        handleChangeIngredient(ingredient);
    }, [handleChangeIngredient, ingredient])

  return (
    <IngredientItem>
      <InputIngredientName type="text" name="name" onChange={handleChange} value={ingredient.name}/>

      <InputIngredientQuantity type="number" name="quanity" onChange={handleChange} value={ingredient.quanity}/>
      <SelectContainer>
        <SelectIngredientUnit name="unit" onChange={handleChange}>
          <OptionIngredientUnit value="things">шт.</OptionIngredientUnit>
          <OptionIngredientUnit value="kg">кг</OptionIngredientUnit>
          <OptionIngredientUnit value="g">г</OptionIngredientUnit>
          <OptionIngredientUnit value="tableSpoon">с.л.</OptionIngredientUnit>
          <OptionIngredientUnit value="teaSpoon">ч.л.</OptionIngredientUnit>
          <OptionIngredientUnit value="liters">л</OptionIngredientUnit>
          <OptionIngredientUnit value="milliliters">мл.</OptionIngredientUnit>
        </SelectIngredientUnit>
      </SelectContainer>
    </IngredientItem>
  );
};
