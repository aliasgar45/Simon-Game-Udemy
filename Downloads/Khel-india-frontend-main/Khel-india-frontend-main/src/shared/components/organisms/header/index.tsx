/** @jsxImportSource @emotion/react */

import { Box } from '@mui/material';
import { css } from '@emotion/react';
import { StyledTypography } from '../../atoms';
import logo from '../../../../logo.svg';
import React from 'react';
import { HEADER_HEIGHT } from '../../../constants/dimensions';

const Header = () => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid rgba(224,224,234, 1)',
        height: HEADER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <Box
          css={css`
            margin: 4px 12px 0 18px;
          `}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </Box>
        <StyledTypography
          sx={{
            fontSize: '20px',
            fontWeight: '650'
          }}
        >
          Khel India
        </StyledTypography>
      </Box>
    </Box>
  );
};

export default Header;
