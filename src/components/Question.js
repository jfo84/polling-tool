import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as constants from '../redux/constants';

import {
  QuestionContainer,
  QuestionInfoContainer,
  QuestionMiscContainer,
  QuestionInput,
  Spacer,
  FlexContainer,
  CloseButton,
  Aria,
  Button,
  PossibleAnswersSubtitle,
} from './styled';

const isDisabled = (t) => t.length >= 80;

// Ephemeral state for questions that haven't been added yet
const useForm = () => {
  const [formAnswer, setAnswer] = useState('');

  const handleChange = (event) => {
    event.persist();

    setAnswer(answer => event.target.value);
  };

  return {
    formAnswer,
    handleChange,
    setAnswer,
  };
};

const Question = () => {
  const { formAnswer, handleChange, setAnswer } = useForm();
  const { text, answers } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <QuestionContainer>
      <QuestionInfoContainer>
        <FlexContainer flex='0 auto'>
          <QuestionInput
            id="question"
            name="question"
            type="text"
            className="form-control"
            aria-label="Question"
            value={text}
            disabled={isDisabled(text)}
            onChange={(event) => dispatch({
              type: constants.UPDATE_TEXT,
              payload: { text: event.target.value }
            })}
          />
          <Spacer />
        </FlexContainer>
        {answers.map((answer, index) => (
          <FlexContainer key={index} flex='0 auto'>
            <QuestionInput
              id="question"
              name="question"
              type="text"
              className="form-control"
              aria-label="Question"
              value={answer}
              disabled={isDisabled(answer)}
              onChange={(event) => dispatch({
                type: constants.UPDATE_ANSWER,
                payload: { answer: event.target.value, index }
              })}
            />
            <CloseButton
              type="button"
              className="close"
              aria-label="Close"
              onClick={(event) => {
                if (answers.length <= 2) return;

                dispatch({
                  type: constants.REMOVE_ANSWER,
                  payload: { index }
                })
              }}
            >
              <Aria aria-hidden="true">&times;</Aria>
            </CloseButton>
          </FlexContainer>
        ))}
        <FlexContainer flex='0 auto'>
          <QuestionInput
            id="question"
            name="question"
            type="text"
            placeholder="Type an answer"
            className="form-control"
            aria-label="Question"
            value={formAnswer}
            disabled={isDisabled(formAnswer)}
            onChange={handleChange}
          />
          <Button
            type="button"
            className="btn btn-secondary"
            aria-label="Add"
            onClick={(event) => {
              if (answers.length >= 10) return;

              dispatch({
                type: constants.ADD_ANSWER,
                payload: { answer: formAnswer }
              })
              // Clear ephemeral
              setAnswer(answer => '');
            }}
          >
            Add
          </Button>
        </FlexContainer>        
      </QuestionInfoContainer>
      <QuestionMiscContainer flex='0 auto'>
        <PossibleAnswersSubtitle>
          {answers.length}/10 possible answers
        </PossibleAnswersSubtitle>
        <Button
          type="button"
          className="btn btn-secondary"
          aria-label="Reset"
          onClick={(event) => dispatch({ type: constants.RESET })}
        >
          Reset
        </Button>
      </QuestionMiscContainer>
    </QuestionContainer>
  );
};

export default Question;