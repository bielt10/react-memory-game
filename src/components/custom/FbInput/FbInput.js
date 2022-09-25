import React from 'react';
import { Input } from './styled';

const BfInput = (props) => {
  return <Input {...props} type={props.typeInput} value={props.value} onChange={props.handleValue} />;
};

export default BfInput;
