import React from 'react';
import { useSelector } from 'react-redux';

import {
  ResultsContainer,
  FlexContainer,
  ResultColumnContainer,
  CenteredContainer,
  BorderedContainer,
  TotalSubtitle,
} from './styled';

const Results = () => {
  const { text, results } = useSelector(state => state);

  const answers = Object.keys(results);
  const totalResults = Object.values(results).reduce((a, b) => a + b, 0);

  return (
    <ResultsContainer>
      <FlexContainer>
        {answers.map((answer, index) => {
          const minWidth = Math.max(200 - (totalResults * 20), 30);
          const numResults = results[answer];

          return (
            <ResultColumnContainer key={index} minWidth={minWidth}>
              <CenteredContainer flex='0 auto'>{numResults}</CenteredContainer>
              <BorderedContainer flex={totalResults - numResults}/>
              <BorderedContainer flex={numResults}/>
              <CenteredContainer flex='0 auto'>{answer}</CenteredContainer>
            </ResultColumnContainer>
          );
        })}
      </FlexContainer>
      {totalResults > 0 && <TotalSubtitle>Total votes: {totalResults}</TotalSubtitle>}
    </ResultsContainer>
  );
};

export default Results;