import { captureException } from '@sentry/browser';

const reportToSentry = (err: Error) => {
  captureException(err);
};

export default reportToSentry;
