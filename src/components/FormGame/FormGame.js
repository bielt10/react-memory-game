import FbButton from '../../components/custom/FbButton/FbButton';
import FbInput from "../../components/custom/FbInput/FbInput";

import { FormContainer, TitleForm } from "./styled";


const FormGame = () => {
  const testFunction = (e) => {
    e.preventDefault();
    alert('Sou uma função');
  };
  return (
    <FormContainer onSubmit={testFunction}>
      <TitleForm >Jogo da memória</TitleForm>
      <FbInput mb={'20px'} primary as="button" type="submit" handleClick={testFunction} />
      <FbButton primary width="100%" as="button" type="submit">
        Iniciar
      </FbButton>
    </FormContainer>
  );
};

export default FormGame;
