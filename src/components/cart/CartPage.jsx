import React from "react";
import style from "../../styles/CartPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const CartPage = (props) => {
  const { id, name, price, desc, imgLink } = props;
  const item = {
    id: id,
    name: name,
    price: price,
    desc: desc,
    imgLink: imgLink
  };
  return (
    <div className={style.Body}>
      <div className={style.Row}>
        <div className={style.ImgHolder}>
          <div
            className={style.Img}
            // style={{ backgroundImage: `url(${imgLink})` }}
          />
          {imgLink}
        </div>
        <div className={style.ItemBody}>
          <div>
            <strong> {name} </strong>
          </div>
          <div className={`text-muted ${style.Description}`}>{desc}</div>
          <div className={style.ItemBodyA}>
            <div className={style.Price}>Price: ₹ {price}</div>
            <div className={style.BtnHolder}>
              <button
                className={style.ItemActionBtn}
                // onClick={() => props.removeItemFromCart(item)}
              >
                <FontAwesomeIcon icon={faMinus} aria-hidden="true" />
              </button>
              <span className={style.Quantity}>
                <strong>
                  {/* {id in props.itemMap
                    ? props.cart[props.itemMap[id]].quantity
                    : 0} */}
                </strong>
              </span>
              <button
                className={style.ItemActionBtn}
                // onClick={() => props.addItemToCart(item)}
              >
                <FontAwesomeIcon icon={faPlus} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
