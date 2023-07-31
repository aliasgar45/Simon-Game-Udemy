import packageDetails from '../../../package.json';

type AppConfig = {
  appVersion: string;
  mixPanelToken: string;
  sentryDsn: string;
};

const appVersion = packageDetails.version;

let appConfig: AppConfig;
if (process.env.REACT_APP_ENV === 'production') {
  appConfig = {
    appVersion,
    mixPanelToken: '',
    sentryDsn: ''
  };
} else {
  appConfig = {
    appVersion,
    mixPanelToken: '',
    sentryDsn: ''
  };
}

export default appConfig;
