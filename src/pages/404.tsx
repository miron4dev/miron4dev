import React from "react";
import TreeView from "react-typist";

import MainLayout from "../MainLayout";

class NotFoundPage extends React.Component {
  render() {
    return (
      <MainLayout title="Page Not Found" description="Page Not Found" keywords="Page Not found">
        <div className="not-found-page">
          <h1 className="align-self-center">
            <TreeView>
              404 Not found
            </TreeView>
            <a href="/" title="Go back">Back</a>
          </h1>
        </div>
      </MainLayout>
    );
  }
}

export default NotFoundPage;
