interface GetShimmerStylesArgs {
  startColor?: string;
  midColor?: string;
  endColor?: string;
}

export default function getShimmerStyles({
  startColor = '#1b212b',
  midColor = '#232b36',
  endColor = '#1b212b'
}: GetShimmerStylesArgs): {
  animation: string;
  background: string;
  backgroundSize: string;
} {
  return {
    animation: 'shimmer 2s infinite linear',
    background: `linear-gradient(to right, ${startColor} 4%, ${midColor} 25%, ${endColor} 36%)`,
    backgroundSize: '1000px 100%'
  };
}
