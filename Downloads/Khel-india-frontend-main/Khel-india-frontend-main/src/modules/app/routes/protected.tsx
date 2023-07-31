/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

interface ProtectedPlaceholderProps {
  onClick?: () => void;
  heading?: string;
  description?: string;
  buttonText?: string;
  showButton?: boolean;
}

const ProtectedPlaceholder: FC<ProtectedPlaceholderProps> = ({
  heading = 'Access Denied',
  description = 'You do not have access to this content.',
  onClick,
  buttonText = 'Go to Home',
  showButton = true
}) => {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 36px 72px;
          border-radius: 16px;
          background-color: #f5f5f5;
        `}
      >
        <h1
          css={css`
            margin: 0;
          `}
        >
          {heading}
        </h1>
        <p
          css={css`
            margin-top: 16px;
          `}
        >
          {description}
        </p>

        {showButton && (
          <Button
            css={css`
              color: white;
              padding: 12px 24px;
              font-size: 16px;
              transition: all 0.2s ease-in-out;
              margin-top: 48px;

              &:hover {
                scale: 1.05;
                background-color: #dc8f38;
              }
            `}
            onClick={() => {
              if (onClick) {
                onClick();
              } else {
                navigate('/');
              }
            }}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProtectedPlaceholder;
