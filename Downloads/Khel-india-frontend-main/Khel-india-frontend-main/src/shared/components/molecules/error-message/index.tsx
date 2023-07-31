import { memo, useCallback, useEffect } from 'react';
import index from '../../../../infra/sentry';
import { StyledTypography } from '../../atoms';

const ErrorMessage = memo(({ messageId }: { messageId: string }) => {
  const report = useCallback((id: string) => {
    const error = new Error(
      `An error occurred while rendering message, messageId: ${id}`
    );
    console.error(error);
    index(error);
  }, []);

  useEffect(() => {
    report(messageId);
  }, [messageId, report]);

  return (
    <StyledTypography fontSize={10}>
      Couldn't display this message. reported to support team.
    </StyledTypography>
  );
});

export default ErrorMessage;
