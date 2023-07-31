import { keyframes } from '@emotion/css';

export const bounce = (height: string) => keyframes`
                  0%   { transform: translateY(0); }
                  50%  { transform: translateY(${height}); }
                  100% { transform: translateY(0); }
                `;

export const rotate360Degrees = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const shake = keyframes`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;

export const bounceAtAngleOf45Degrees = (
  heightInPixels: number,
  spread: number = 0
) => keyframes`
  0% {
    transform: translate(0, 0) rotate(-20deg);
  }
  16.67% {
    transform: translate(${heightInPixels}px, ${heightInPixels}px) rotate(-20deg);
  }
  33.33% {
    transform: translate(${
      heightInPixels + spread
    }px, ${heightInPixels}px) rotate(0deg);
  }
  50% {
    transform: translate(${2 * heightInPixels + spread}px, 0) rotate(20deg);
  }
  66.67% {
    transform: translate(${
      heightInPixels + spread
    }px, ${heightInPixels}px) rotate(0deg);
  }
  83.33% {
    transform: translate(${heightInPixels}px, ${heightInPixels}px) rotate(-20deg);
  }
  100% {
    transform: translate(0, 0) rotate(-20deg);
  }
`;

export const shuttleCockRain = keyframes`
  0% {
    transform: translateX(0) translateY(-50px) rotate(-60deg);
  }
  50% {
    transform: translateX(0) translateY(100vh/2) rotate(-40deg);
  }
  100% {
    transform: translateX(0) translateY(100vh) rotate(0deg);
  }
`;

export const moveAt45DegreesTowardsTop = (
  offsetInPx: number = 100
) => keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(${offsetInPx}px) translateY(-${offsetInPx}px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;
