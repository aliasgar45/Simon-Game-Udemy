export const getButtonWidth = (i: number, buttonsCount: number) => {
  if (buttonsCount && buttonsCount <= 2) {
    return '100%';
  }

  if (buttonsCount && buttonsCount === 3) {
    switch (i) {
      case 0: {
        return '48%';
      }
      case 1: {
        return '48%';
      }
      case 2: {
        return '100%';
      }
    }
  }
};
