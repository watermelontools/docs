import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Transparent",
    Svg: require("@site/static/img/transparent.svg").default,
    description: <>Open-core product and roadmap</>,
  },
  {
    title: "Usable",
    Svg: require("@site/static/img/usable.svg").default,
    description: <>Works right on your workflow</>,
  },
  {
    title: "Private",
    Svg: require("@site/static/img/private.svg").default,
    description: <>We don't store your code</>,
  },
  {
    title: "Accessible",
    Svg: require("@site/static/img/accessible.svg").default,
    description: <>Connect the tools you already use</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
