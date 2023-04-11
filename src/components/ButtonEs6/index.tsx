// import "./ButtonEs6.css";
import styles from "./ButtonEs6.module.css";

//Button theo ES6
// function ButtonEs6({label, icon, colorCustom} : {colorCustom?: string, label?: string, icon?: React.ReactNode}){
//     return(
//       <button className={`${colorCustom}`} type='button'>{icon ? icon :null} {label}</button>
//     )
// }

function ButtonEs6({label = 'Button', icon, colorCustom=''} : {colorCustom?: string, label?: string, icon?: React.ReactNode}){
    return(
      <button className={`${styles.button} ${styles[colorCustom]}`} type='button'>{icon ? icon :null} {label}</button>
    )
}

export default ButtonEs6