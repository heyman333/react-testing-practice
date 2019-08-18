import React from "react";
import styles from "./CSSModule.module.scss";

interface Props {
  name: string;
  profileImgUrl?: string;
  age: number;
}

const CircleProfile: React.FunctionComponent<Props> = ({
  name,
  profileImgUrl,
  age,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileWrapper} data-testid="imageWrapper">
        {profileImgUrl && (
          <img className={styles.img} src={profileImgUrl} alt="프로필이미지" />
        )}
      </div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

export default CircleProfile;
