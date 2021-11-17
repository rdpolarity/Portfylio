// @flow
import * as React from 'react';
// @ts-ignore
import * as styles from "./Button.module.scss"


type Props = {
    children: String,
    icon?: string,
    black?: Boolean,
    rounded?: Boolean,
    colored?: Boolean
}

export const Button = ({children, icon, black = true, rounded = false, colored = false}: Props) => {
    const classes = []
    if (colored) classes.push(styles.buttonColored)
    else classes.push(styles.button)
    if (black) classes.push(styles.buttonHoverBlack)

    return (
        <div className={classes.join(' ')}>
            <img height={35} src={icon}/>
            <p>ok no</p>
            <p>{children}</p>
        </div>
    );
};