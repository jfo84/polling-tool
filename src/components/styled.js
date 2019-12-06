import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  flex: ${props => props.flex ? props.flex : 1};
`;

export const CenteredContainer = styled(FlexContainer)`
  align-self: center;
  font-weight: lighter;

  flex: ${props => props.flex ? props.flex : 1};
`;

export const BorderedContainer = styled(FlexContainer)`
  border: 1px solid black;
`;

export const AppContainer = styled.div``;

export const AppTitle = styled.h2`
  font-weight: lighter;
  padding: 15px;
  margin-bottom: 0;
  border-bottom: 1px solid gray;
`;

export const PollContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  min-height: 600px;

  margin: 20px;
`;

export const QuestionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const QuestionMiscContainer = styled(FlexContainer)`
  justify-content: space-between;
`;

export const QuestionTitle = styled.h2`
  font-weight: lighter;

  padding: 20px;
`;

export const QuestionInput = styled.input`
  flex: 6;

  margin: 10px;
`;

export const Spacer = styled.div`
  flex: 0 auto;

  min-width: 16px;
`;

export const CloseButton = styled.button`
  flex: 0 auto;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  min-height: 600px;

  padding: 20px;

  border-left: 1px solid gray;
  border-right: 1px solid gray;

  @media (max-width: 768px) {
    min-height: 300px;

    border-left: 0;
    border-top: 1px solid gray;
    border-right: 0;
    border-bottom: 1px solid gray;
  }
`;

export const AnswerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const AnswerCheckbox = styled.input`
  flex: 1;

  margin: 10px;
`;

export const AnswerLabel = styled.label`
  flex: 5;

  font-weight: lighter;

  margin: 10px;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  min-height: 600px;

  padding: 20px;
`;

export const ResultColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  min-width: ${props => props.minWidth}px;
  max-width: 250px;
  min-height: 450px;
`;

export const TotalSubtitle = styled.h4`
  flex: 0 auto;

  font-weight: lighter;
`;

export const InputsContainer = styled.div`
  padding: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const FormElement = styled.form``;

export const Label = styled.label``;

export const Select = styled.select``;

export const Option = styled.option``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Aria = styled.span``;

export const SubmitContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
`;

export const Submit = styled.button``;

export const PossibleAnswersSubtitle = styled.h4`
  font-weight: lighter;
`;
