export interface IngredientsI {
    id: string;
    name: string;
    quanity: string;
    unit: string;
  }
  
  export interface IngredientsProps {
    handleChangeIngredientList: (ingredientsList: IngredientsI[]) => void;
  }