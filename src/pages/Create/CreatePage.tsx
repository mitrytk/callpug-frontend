import React, { ChangeEvent, useCallback, useState} from "react";
import {
  CreatePageStyled,
  Form,
  Title,
  Subtitle,
  LabelRecipeName,
  InputRecipeName,
  CreateButton,
} from "./CreatePage.styled";
import { IngredientsI } from "../../components/Ingredients/Ingredients.types";


import { Ingredients } from "../../components/Ingredients/Ingredients";

interface FormData {
  recipename: string,
  ingredients: IngredientsI[],
}

export const CreatePage = () => {
  const [formData, setFormData] = useState<FormData>({
    recipename: "",
    ingredients: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChangeIngredientList = useCallback((ingredientsList: IngredientsI[]) => {
    setFormData((prevFormData) => {return {...prevFormData, ingredients: ingredientsList}})
  }, []);

  return (
    <CreatePageStyled>
      <Title>Добавление рецепта</Title>
      <Form name="create_form" action="/submit">
        <LabelRecipeName>
          Название рецепта
          <InputRecipeName
            type="text"
            name="recipename"
            onChange={handleChange}
            value={formData.recipename}
          />
        </LabelRecipeName>
        <Subtitle>Ингридиенты</Subtitle>
        <Ingredients handleChangeIngredientList={handleChangeIngredientList}/>
        <CreateButton type="button" onClick={handlerSubmit}>
          Создать
        </CreateButton>
      </Form>
    </CreatePageStyled>
  );
};
