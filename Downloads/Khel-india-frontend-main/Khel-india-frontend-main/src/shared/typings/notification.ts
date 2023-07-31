export interface Notification {
  id: string;
  message: string;
  open: boolean;
  type?: `${NotificationType}`;
  autoHideDuration?: number;
}

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}
