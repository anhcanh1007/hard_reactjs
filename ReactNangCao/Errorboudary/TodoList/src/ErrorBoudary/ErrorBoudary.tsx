import React, { Component, ReactNode } from "react";

interface Props {
  childrend?: ReactNode;
}
interface State {
  hasError: boolean;
}
export default class ErrorBoudary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error: ", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.childrend;
  }
}
