import propTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Button
        type="button"
        key={options[0]}
        id={options[0]}
        onClick={onLeaveFeedback}
      >
        Good
      </Button>
      <Button
        type="button"
        key={options[1]}
        id={options[1]}
        onClick={onLeaveFeedback}
      >
        Neutral
      </Button>
      <Button
        type="button"
        key={options[2]}
        id={options[2]}
        onClick={onLeaveFeedback}
      >
        Bad
      </Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
