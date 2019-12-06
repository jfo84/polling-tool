import * as constants from '../constants';

export const initialState = {
  text: 'How many chucks can a wood chuck chuck?',
  answers: ['6', '9'],
  results: {},
};

const poll = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case constants.UPDATE_TEXT:
      return {
        ...state,
        text: payload.text
      };

    case constants.ADD_ANSWER: {
      const { answers } = state;

      // Remove element by index
      const newAnswers = [ ...answers, payload.answer ];

      return {
        ...state,
        answers: newAnswers
      };
    }

    case constants.UPDATE_ANSWER: {
      const { answers } = state;

      // Copy
      let newAnswers = JSON.parse(JSON.stringify(answers));
      // Update element by index
      newAnswers[payload.index] = payload.answer;

      return {
        ...state,
        answers: newAnswers
      };
    }    

    case constants.REMOVE_ANSWER: {
      const { answers } = state;

      // Copy
      let newAnswers = JSON.parse(JSON.stringify(answers));
      // Remove element by index
      newAnswers.splice(payload.index, 1);

      return {
        ...state,
        answers: newAnswers
      };
    }

    case constants.ADD_RESULT: {
      const { answers, results } = state;

      // Copy
      const newResults = JSON.parse(JSON.stringify(results));

      const answer = answers[payload.index];
      if (newResults[answer]) {
        let numResults = newResults[answer];
        numResults = numResults + 1;

        newResults[answer] = numResults;
      } else {
        newResults[answer] = 1;
      }

      return {
        ...state,
        results: newResults
      };
    }

    case constants.RESET:
      return initialState;

    default:
      return state;
  }
}

export default poll;