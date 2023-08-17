import React, { ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet";

import "../../theme.less";

interface MainLayoutProps {
  title: string;
  description: string;
  keywords: string;
  isRoot?: boolean;
  children: ReactNode;
}

const openGraphMeta = [
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:title",
    content: "Evgeny Mironenko | Software Engineer",
  },
  {
    property: "og:achievements",
    content:
      "Personal website by Evgeny Mironenko Senior Software Engineer. " +
      "Java, Kotlin, Spring, React, TypeScript. Currently based in Tallinn, Estonia.",
  },
  {
    property: "og:url",
    content: "https://miron4dev.com/",
  },
  {
    property: "og:site_name",
    content: "Personal website by Evgeny Mironenko",
  },
  {
    property: "og:image",
    content: "https://miron4dev.com/me.jpg",
  },
];

const twitterMeta = [
  {
    name: "twitter:card",
    content: "summary",
  },
  {
    name: "twitter:title",
    content: "Evgeny Mironenko | Software Engineer",
  },
  {
    name: "twitter:description",
    content:
      "Personal website by Evgeny Mironenko Senior Software Engineer. " +
      "Java, Kotlin, Spring, React, TypeScript. Currently based in Tallinn, Estonia.",
  },
  {
    name: "twitter:url",
    content: "https://miron4dev.com/",
  },
  {
    name: "twitter:site",
    content: "@miron4dev",
  },
  {
    name: "twitter:image",
    content: "https://miron4dev.com/me.jpg",
  },
];

const schemaLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Evgeny Mironenko",
  url: "https://miron4dev.com/",
  jobTitle: "Senior Software Engineer",
  alumniOf: "Herzen University",
  gender: "male",
  image: "https://miron4dev.com/me.jpg",
  sameAs: [
    "https://linkedin.com/in/miron4dev",
    "https://github.com/miron4dev",
    "https://www.facebook.com/miron4dev",
    "https://t.me/miron4dev",
    "https://twitter.com/miron4dev",
  ],
};

const MainLayout = ({ title, description, keywords, isRoot = false, children }: MainLayoutProps) => {
  const meta: any[] = [
    {
      charSet: "utf-8",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: keywords,
    },
  ];

  useEffect(() => {
    if (isRoot) {
      meta.push(openGraphMeta);
      meta.push(twitterMeta);
    }
  }, [isRoot]);

  return (
    <>
      <Helmet title={title} meta={meta}>
        <html lang="en" />

        {isRoot && <script type="application/ld+json">{JSON.stringify(schemaLd)}</script>}
      </Helmet>
      {children}
    </>
  );
};

export default MainLayout;
