import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as constants from '../redux/constants';

import {
  AnswerContainer,
  QuestionTitle,
  InputsContainer,
  FlexContainer,
  AnswerInfoContainer,
  AnswerCheckbox,
  AnswerLabel,
  SubmitContainer,
  Submit,
} from './styled';

// Ephemerally store the index of the selected answer
const useForm = () => {
  const [selected, setSelected] = useState(0);

  const handleChange = (event) => {
    event.persist();

    setSelected(selected => event.target.value);
  };

  return {
    selected,
    handleChange
  };
};

const Answer = () => {
  const { selected, handleChange } = useForm();
  const { text, answers } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <AnswerContainer>
      <AnswerInfoContainer>
        <QuestionTitle>{text}</QuestionTitle>
        <InputsContainer>
          {answers.map((answer, index) => (
            <FlexContainer key={index}>
              <AnswerCheckbox
                type="checkbox"
                value={index}
                checked={index === parseInt(selected)}
                onChange={handleChange}
              />
              <AnswerLabel>{answer}</AnswerLabel>
            </FlexContainer>
          ))}
        </InputsContainer>
      </AnswerInfoContainer>
        <SubmitContainer>
          <Submit
            className="btn btn-secondary"
            onClick={(event) => dispatch({
              type: constants.ADD_RESULT,
              payload: { index: parseInt(selected) }
            })}
          >
            Vote
          </Submit>
        </SubmitContainer>
    </AnswerContainer>
  );
};

export default Answer;