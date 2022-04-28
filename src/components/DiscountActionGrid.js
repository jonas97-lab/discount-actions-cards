import React from "react";
import DiscountActionItem from "./DiscountActionItem";
import style from "./discountAction.module.scss";

const DiscountActionGrid = ({ isLoading, discountActions }) => {
  return (
    <div>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <section className={style.cards}>
          {discountActions &&
            discountActions.map((discountAction, key) => (
              <DiscountActionItem key={key} discountAction={discountAction} />
            ))}
        </section>
      )}
    </div>
  );
};

export default DiscountActionGrid;
