import styled from '@emotion/styled';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { CSSProperties } from 'react';

type CustomTooltipProps = TooltipProps & {
  styles?: { tooltip: CSSProperties };
};

const StyledTooltipStyle = styled(
  ({ className, ...props }: CustomTooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  )
)(({ styles: { tooltip } = {} }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'black'
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'black',
    ...tooltip
  }
}));

const StyledTooltip: React.FC<CustomTooltipProps> = (props) => {
  return <StyledTooltipStyle {...props} />;
};

export default StyledTooltip;
