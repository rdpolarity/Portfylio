// @flow
import * as React from 'react';
// import {Splash} from "../components/Splash";

console.log("module loaded 1");
window.addEventListener("load", () => { console.log("onload"); });


type Props = {};
export const Home = (props: Props) => {
    return (
        <div>
            <h1>testdddd</h1>
            {/*<Splash/>*/}
        </div>
    );
};

export default Home