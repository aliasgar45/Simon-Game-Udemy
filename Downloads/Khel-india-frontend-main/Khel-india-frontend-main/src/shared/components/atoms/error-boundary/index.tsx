import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  error?: string;
  component?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.component) {
        return this.props.component;
      }

      return <span>{this.props.error ?? 'Aww Snap.. there was an error'}</span>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
