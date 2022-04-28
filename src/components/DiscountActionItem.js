import React, { useState } from "react";
import imgFreeEntree from "../assets/img1.jpg";
import imgFreeSailing from "../assets/img2.jpg";
import imgDiscountTennis from "../assets/img3.jpg";
import style from "./discountAction.module.scss";
import { LikeButtonLogo } from "./LikeButtonLogo";
import { useMediaQuery } from "react-responsive";

const DiscountActionItem = ({ discountAction }) => {
  const [likedItem, setLikedItem] = useState(false);

  const isBiggerScreen = useMediaQuery({ query: "(min-width: 667px)" });

  const actionType = (
    <span
      className={style.actionType}
      style={
        discountAction.id === 1 || discountAction.id === 2
          ? { backgroundColor: "#fbd324" }
          : { backgroundColor: "#f9a4e9" }
      }
    >
      {discountAction.linked.type}
    </span>
  );

  const previewImg = (id) => {
    if (id === 1) {
      return imgFreeEntree;
    } else if (id === 2) {
      return imgFreeSailing;
    } else {
      return imgDiscountTennis;
    }
  };

  return (
    <div className={style.card}>
      <div className={style.horizontalView}>
        {isBiggerScreen && actionType}
        <div
          className={style.image}
          style={{
            backgroundImage: `url(${previewImg(discountAction.id)})`,
          }}
        />
        <div className={style.info}>
          <span
            className={style.likeButton}
            onClick={() => setLikedItem(!likedItem)}
          >
            <LikeButtonLogo likedItem={likedItem} />
          </span>
          <div className={style.innerInfo}>
            <div>
              <span className={style.linkedPartner}>
                {discountAction.linked.partner[0]}
              </span>
              <h1>{discountAction.title}</h1>
            </div>
            <p>Geldig t/m {discountAction.valid}</p>
            {!isBiggerScreen && actionType}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountActionItem;
