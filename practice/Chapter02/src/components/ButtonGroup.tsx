import { useCount } from '../hooks/useCounter';
import Button from './Button';

const ButtonGroup = () => {
  const { handleIncrement, handleDecrement } = useCount();
  return (
    <div>
      <Button onClick={handleIncrement} text='+1 증가' />
      <Button onClick={handleDecrement} text='-1 감소' />
    </div>
  );
};

export default ButtonGroup;