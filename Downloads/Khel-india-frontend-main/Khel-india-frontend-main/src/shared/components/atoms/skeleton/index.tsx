import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import getShimmerStyles from '../../../styles/shimmer';

const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  margin: 8px 0;
  padding: 8px 20px;

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;

export const Skeleton = styled.div<{
  height?: string;
  width?: string;
  sx?: SerializedStyles;
}>((props) => ({
  height: props.height ?? '15px',
  width: props.width ?? '100%',
  borderRadius: '2px',
  ...getShimmerStyles({}),
  ...props.sx
}));

const SkeletonLoader: FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <SkeletonContainer>
      {Array.from({ length: count }, (_, i) => i + 1).map((_, idx) => (
        <Skeleton key={idx} />
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonLoader;
