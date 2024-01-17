import { useState } from 'react';
import { CommonLayout } from '../../components/CommonLayout';
import { CodeConfirmation } from './CodeConfirmation';
import SnackbarService from '../../services/Snackbar/SnackbarService';
import { PersonalData } from './PersonalData';
import { getAge, isDateValid } from './PersonalData/helper';
import { useNavigate } from 'react-router-dom';
import { useAuthUserContext } from '../../context/UserContext';
import { ROUTES } from '../../core/Router';

const MINIMUM_AGE = 18;

export const GetStarted = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useAuthUserContext();

  const handleConfirmedCode = (email: string) => {
    setEmail(email);
    SnackbarService.notify({
      title: 'Success',
      content: 'Code is correct',
      severity: 'success',
      duration: 2000,
    });
  };

  const handleConfirmPersonalData = (name: string, date: string) => {
    isDateValid(date);
    if (name && isDateValid(date)) {
      const age = getAge(date);
      if (age >= MINIMUM_AGE) {
        dispatch({ type: 'SET_USER.SUCCESS', payload: { name, email } });
        navigate(ROUTES.challenge);
      } else {
        SnackbarService.notify({
          title: 'Error',
          content: 'You must be 18 years or older',
          severity: 'error',
          duration: 2000,
        });
      }
    }
  };

  return (
    <CommonLayout>
      {email ? (
        <PersonalData email={email} onComplete={handleConfirmPersonalData} />
      ) : (
        <CodeConfirmation onCodeConfirmed={handleConfirmedCode} />
      )}
    </CommonLayout>
  );
};
