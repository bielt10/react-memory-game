import { Button } from './styled';
const FbButton = (props) => {
  return (
    <Button {...props} onClick={props.handleClick}>
      {props.children}
    </Button>
  );
};

export default FbButton;
