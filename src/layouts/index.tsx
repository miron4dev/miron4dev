import React from "react";

import { Helmet } from "react-helmet";

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Evgeny Mironenko | Software Engineer"
          meta={[
            {
              charSet: "utf-8"
            },
            {
              httpEquiv: "x-ua-compatible",
              content: "ie=edge"
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            },
            {
              name: "description",
              content: "Evgeny Mironenko Personal Website"
            },
            {
              name: "keywords",
              content: "Evgeny, Mironenko, Evgeny Mironenko, Software Engineer" +
                "Software Developer, Java, Kotlin, Typescript, React"
            }
          ]}>
          <html lang="en"/>
        </Helmet>

        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
