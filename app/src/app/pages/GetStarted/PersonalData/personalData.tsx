import { Header, Text } from '../../../components/Typography';
import { Button } from '../../../components/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { InputText } from '../../../components/InputText';

const RootContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const BirthdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AgreeTermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 130px;
`;

interface PersonalDataProps {
  email: string;
  onComplete: (name: string, date: string) => void;
}

export const PersonalData = ({ email, onComplete }: PersonalDataProps) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState<string | null>(null);

  const handleChangeName = (newValue: string) => {
    setName(newValue);
  };

  const handleChangeDate = (newValue: string) => {
    setDate(newValue);
  };
  return (
    <RootContainer>
      <ContentContainer>
        <NameContainer>
          <Header>What's your name?</Header>
          <Text>Please enter your first and last name</Text>
          <InputText
            placeholder="Jane Doe"
            value={name}
            onChange={handleChangeName}
          />
        </NameContainer>
        <BirthdayContainer>
          <Header>What's your birthday?</Header>
          <Text>You must be 18 or older to continue.</Text>
          <InputText
            placeholder="DD/MM/YYYY"
            type="date"
            onChange={handleChangeDate}
          />
        </BirthdayContainer>
        <AgreeTermsContainer>
          <Text>
            I agree to the <strong>Terms of Service.</strong>
          </Text>
        </AgreeTermsContainer>
        <Button
          onClick={() => onComplete(name, date || '')}
          disabled={!name || !date}
        >
          complete
        </Button>
      </ContentContainer>
    </RootContainer>
  );
};
