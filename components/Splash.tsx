// @flow
import * as React from 'react';
// @ts-ignore
import * as styles from './Splash.module.scss'
// @ts-ignore
import SplashLogo from '/resources/SplashLogo.svg'
import {Button} from "./Button";
// @ts-ignore
import Link from "url:/resources/Link.png"

// const splashLogoUrl = new URL('../resources/SplashLogo.svg', import.meta.url)


type Props = {

};
export const Splash = (props: Props) => {
    return (
        <div className={styles.splashBox}>
            <SplashLogo/>
            <p className={styles.nameTitle}>AIDEN MELLOR</p>
            <Button icon={Link}>Resume</Button>
        </div>
    );
};