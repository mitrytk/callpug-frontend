import React, { ChangeEvent, useCallback, useState} from "react";
import {
  CreatePageStyled,
  Form,
  Title,
  Subtitle,
  LabelRecipeName,
  InputRecipeName,
  CreateButton,
  DescriptionTextarea,
} from "./CreatePage.styled";
import { IngredientsI } from "../../components/Ingredients/Ingredients.types";


import { Ingredients } from "../../components/Ingredients/Ingredients";
import { CookingSteps } from "../../components/CookingStepsList/CookingSteps";

interface FormData {
  recipename: string,
  description: string,
  ingredients: IngredientsI[],
}

export const CreatePage = () => {
  const [formData, setFormData] = useState<FormData>({
    recipename: "",
    description: "",
    ingredients: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => { return {...prevFormData, [name]: value }});
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
        <Subtitle>Описание</Subtitle>
        <DescriptionTextarea
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        <Subtitle>Ингридиенты</Subtitle>
        <Ingredients handleChangeIngredientList={handleChangeIngredientList}/>
        <CookingSteps />
        <CreateButton type="button" onClick={handlerSubmit}>
          Создать
        </CreateButton>
      </Form>
    </CreatePageStyled>
  );
};
