import styled from 'styled-components';
import { useGoals } from './hooks/useGoals';
import { tasks } from './mockData';
import { GoalsList } from './components/goalsList';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { PageHighlight } from '../../components/PageHighlight';
import { device } from '../../components/theme/theme';
import { TaskCompletion } from '../../components/TaskCompletion';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '../../../assets/menu.svg';
import CloseIcon from '../../../assets/close.svg';
import { useState } from 'react';
import { Menu } from '../../components/Menu';

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const GoalsContainer = styled.div`
  display: flex;
  width: 98%;
  height: 100%;
  padding: 10px;
  position: relative;

  @media ${device.tablet} {
    padding: 90px;
    width: calc(100% - 180px);
    height: calc(100% - 140px);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 100px;
  }
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 20px;

  @media ${device.tablet} {
    bottom: 60px;
    left: 90px;
    width: 130px;
  }
`;

const NavAbsoluteContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const MenuIconContainer = styled.div`
  cursor: pointer;
`;

const MenuContainer = styled.div`
  background: white;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 6px 41px rgba(0, 0, 0, 0.12);

  @media ${device.tablet} {
    min-width: 400px;
  }
`;

export const Goal = () => {
  const navigate = useNavigate();
  const { isMd } = useBreakpoints();

  const { pointsCompleted, handleUpdateGoal, goals, goalsDictionary } =
    useGoals({ goals: tasks });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // This value should be populated from the backend
  // however I try to follow the mock designs and it has 2 cases
  // one for mobile and an other one for desktop
  // mobile version seems to need only 2 more tasks and desktop 1 more
  // however for testing reasons I change that on desktop version
  // you need all tasks and on mobile just 3
  const POINTS_NEEDED = !isMd ? 3 : 5;

  const titleValues = !isMd
    ? {
        title: 'Play to win',
        subtitle: '2 VIP floor tickets',
        content:
          'The first 20 users to answer the quiz correctly and complete 2 additional items below will be eligible to win.',
      }
    : {
        title: 'Enter to win',
        subtitle: '2 Superbowl LVII tickets',
        content:
          'Complete all five items for a chance to win. One winner will be selected on December 30, 2023.',
      };

  const completionAmount = (() => {
    if (pointsCompleted >= POINTS_NEEDED) {
      return 100;
    }

    if (POINTS_NEEDED <= 0) {
      return 0;
    }

    return (pointsCompleted / POINTS_NEEDED) * 100;
  })();

  // Redirect to thanks page once the use completes
  // the task
  if (completionAmount === 100) {
    navigate('/thanks');
  }

  return (
    <RootContainer>
      <NavAbsoluteContainer>
        <NavContainer>
          <MenuIconContainer onClick={handleMenuOpen}>
            <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="menu icon" />
          </MenuIconContainer>
          {isMenuOpen && (
            <MenuContainer>
              <Menu />
            </MenuContainer>
          )}
        </NavContainer>
      </NavAbsoluteContainer>
      <GoalsContainer>
        <AbsoluteContainer>
          <TaskCompletion amount={completionAmount} />
        </AbsoluteContainer>
        <ContentContainer>
          <PageHighlight
            title={titleValues.title}
            subtitle={titleValues.subtitle}
            content={titleValues.content}
          />
          <GoalsList
            goals={goals}
            onActive={handleUpdateGoal}
            goalDictionary={goalsDictionary}
          />
        </ContentContainer>
      </GoalsContainer>
    </RootContainer>
  );
};
