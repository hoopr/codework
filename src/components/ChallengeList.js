import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledChallengeList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const StyledChallengeCard = styled.li`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin: 0.5rem 0;
  padding: 1rem 2rem;
`;

export default function ChallengeList({ challenges }) {
  return (
    <StyledChallengeList>
      {challenges.map(challenge => (
        <StyledChallengeCard key={challenge.key}>
          {challenge.name}
        </StyledChallengeCard>
      ))}
    </StyledChallengeList>
  );
}

ChallengeList.propTypes = {
  challenges: PropTypes.array.isRequired,
};
