import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background: linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6);
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  padding: 1.5rem;
`;

const StyledInputBar = styled.div`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  display: flex;
  overflow: hidden;

  &.active {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  label {
    flex: 1;
  }

  input {
    border: none;
    outline: none;
    padding: 0.75rem 1rem;
    width: 100%;
  }

  button {
    background: white;
    border: none;
    color: #00bcd4;
    font-size: 0.875rem;
    outline: none;
    padding: 0.75rem 1rem;
    position: relative;

    &:focus {
      background-color: #f6f9fc;
    }

    &::before {
      background: #f2eaf7;
      bottom: 7px;
      content: '';
      left: 0;
      position: absolute;
      top: 7px;
      width: 2px;
    }
  }
`;

export default class ChallengeImportForm extends React.Component {
  handleFocus = (event) => {
    event.target.parentNode.parentNode.classList.add('active');
  }

  handleBlur = (event) => {
    event.target.parentNode.parentNode.classList.remove('active');
  }

  render() {
    const { handleChange, handleSubmit, url } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputBar>
          <label htmlFor="challenge-url">
            <input
              id="challenge-url"
              name="url"
              onBlur={this.handleBlur}
              onChange={handleChange}
              onFocus={this.handleFocus}
              placeholder="Codewars Kata URL"
              type="text"
              value={url}
            />
          </label>
          <button type="submit">Import</button>
        </StyledInputBar>
      </StyledForm>
    );
  }
}

ChallengeImportForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
