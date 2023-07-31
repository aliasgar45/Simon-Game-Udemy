/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { FC } from 'react';
import StyledButton from '../../atoms/button';
import StyledTypography from '../../atoms/typography';
import { TEXT_COLOR_LIGHT } from '../../../constants/colors';

interface ErrorContainerProps {
  error?: string;
}

const ErrorContainer: FC<ErrorContainerProps> = ({
  error = 'An Error Occurred'
}) => {
  return (
    <div
      css={css`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          font-family: 'Avenir Next', serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.3;
          text-align: center;
          color: ${TEXT_COLOR_LIGHT};
        `}
      >
        <StyledTypography
          css={css`
            font-size: 74px;
            font-weight: 800;
          `}
        >
          OOPS!
        </StyledTypography>
        <StyledTypography
          css={css`
            font-size: 18px;
          `}
        >
          {error}
        </StyledTypography>
      </div>
      <StyledButton
        variant="text"
        onClick={() => window.location.reload()}
        css={css`
          background: none;
        `}
      >
        RELOAD PAGE
      </StyledButton>
    </div>
  );
};

export default ErrorContainer;
