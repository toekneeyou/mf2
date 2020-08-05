import React from "react";

const Button = React.lazy(() => import("app1/App"));

export default class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback="Loading app1">
        <Button />
      </React.Suspense>
    );
  }
}
