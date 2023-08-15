import React from "react";
import TreeView from "react-typist";
import MainLayout from "../../MainLayout";
import * as styles from "./NotFoundPage.module.less"

const NotFoundPage = () => {
  return (
    <MainLayout title="Page Not Found" description="Page Not Found" keywords="Page Not found">
      <div className={styles.mainLayout}>
        <h1>
          <TreeView>
            404 Not Found
          </TreeView>
          <a href="/" title="Go back">Back</a>
        </h1>
      </div>
    </MainLayout>
  );
}

export default NotFoundPage;