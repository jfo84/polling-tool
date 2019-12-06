import React from 'react';

import Question from './Question';
import Answer from './Answer';
import Results from './Results';
import {
  PollContainer
} from './styled';

const Poll = () => (
  <PollContainer>
    <Question />
    <Answer />
    <Results />
  </PollContainer>
);

export default Poll;
