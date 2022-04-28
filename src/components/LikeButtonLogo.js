import React from "react";
import clsx from "clsx";
import style from "./discountAction.module.scss";

export const LikeButtonLogo = ({ likedItem }) => {
  return (
    <svg
      className={clsx(style.likeButtonIcon, likedItem && style.likedButtonIcon)}
      width="18"
      height="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.447 2.268a3.759 3.759 0 0 1 5.349-1.085 4.022 4.022 0 0 1 1 5.599L9.023 16.5l-.024-.034-.022.034-6.773-9.718a4.022 4.022 0 0 1 1.169-5.71 3.759 3.759 0 0 1 5.391 1.583L9 3.154l.236-.499c.031-.067.065-.132.1-.197Z"
        fill=""
        fillRule="evenodd"
      />
    </svg>
  );
};
