import React from "react";

import MyText from "../../../text";
import styles from "./styles.module.scss";

type TabTitleProps = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  selectedTab: number;
};

export const TabTitle: React.FC<TabTitleProps> = ({
  title,
  setSelectedTab,
  index,
  selectedTab,
}) => (
  <MyText
    className={styles.tabTitle}
    onClick={() => setSelectedTab(index)}
    paddingX={15}
    paddingY={5}
    backgroundColor={index === selectedTab ? "var(--black)" : ""}
    color={index === selectedTab ? "var(--white)" : ""}
    borderRadius={index === selectedTab ? 4 : 0}
  >
    {title}
  </MyText>
);
