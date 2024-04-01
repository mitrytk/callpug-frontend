import { useState } from "react";
import { Subtitle } from "../../pages/Create/CreatePage.styled";
import {
  CookingStepsContainer,
  CookingStepsList,
  CookingStepsAddBtn,
  IconAddSVG,
} from "./CookingSteps.styled";
import { nanoid } from "nanoid";
import { CookingStep } from "../CookingStep/CookingStep";


export const CookingSteps = () => {
  const [stepsList, setStepsList] = useState<JSX.Element[]>([
    <CookingStep
      key={nanoid(5)}
      handleChangeStep={() => {console.log(1);
      }
      }
    />,
  ]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStepsList(prevStepsList => {return ([...prevStepsList,
        <CookingStep
          key={nanoid(5)}
          handleChangeStep={() => {console.log(1);
          }
          }
        />,
      ])})
  };

  return (
    <CookingStepsContainer>
      <Subtitle>Шаги приготовления</Subtitle>
      <CookingStepsList>{stepsList}</CookingStepsList>
      <CookingStepsAddBtn type="button" onClick={handleClick}>
        <IconAddSVG />
      </CookingStepsAddBtn>
    </CookingStepsContainer>
  );
};
