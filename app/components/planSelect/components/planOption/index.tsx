import {ReactElement} from "react";
import styles from "./index.module.css";

export interface IOption {
  id: number;
  months: number;
  price: number;
  isMostPopular: boolean;
}

type Props = {
  option: IOption;
  isSelected: boolean;
  id: string;
  handleSelect: (id: number) => void;
};

export const PlanOption = ({option, id, isSelected, handleSelect}: Props): ReactElement => {
  const handleClick = () => {
    handleSelect(option.id);
  }

  return (
    <div onClick={handleClick}>
      {option.isMostPopular &&
          <div className={`${styles.mostPopular} ${isSelected ? styles.mostPopularSelected : ''}`}>MOST POPULAR</div>}
      <div
        className={`${styles.wrapper} ${isSelected ? styles.wrapperSelected : ''} ${option.isMostPopular ? styles.noTopBorderRadius : ''} ${option.isMostPopular && isSelected ? styles.wrapperSelectedMostPopular : ''}`}>
        <input type="radio" id={`planChoice${option.id}${id}`} name={id} value={option.id} className={styles.input}
               onChange={handleClick} checked={isSelected}/>
        <label htmlFor={`planChoice${option.id}`} className={styles.label}>
          <h3
            className={styles.description}>{option.months}-Month Plan</h3>
          <span className={styles.price}><span
            className={styles.currency}>$</span><span
            className={styles.priceValue}>{option.price}</span></span></label>
      </div>
    </div>
  );
};
