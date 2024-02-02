import React from "react"
import { useState, useEffect } from 'react';
import './style.css';


export const Loading = (props) => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        

        const html = document.getElementById("html");
        // const navBar = document.getElementById("nav");

        if (document.readyState === 'complete') {
            console.log("complete")
            // navBar.style.display="none";
            html.style.overflow = "unset";
            setIsLoading(false);
        }
        else {
            console.log("complete")
            // navBar.style.display="none";
            html.style.overflow = "hidden";
            setIsLoading(true);

        }

        const handleReadyStateChange = () => {
            if (document.readyState === 'complete') {
                  console.log("complete")
                //   navBar.style.display="none";
                html.style.overflow = "unset";
                setIsLoading(false);
                html.style.overflow = "unset";
                return;
            }
            // navBar.style.display="none";
            html.style.overflow = "hidden";
        };
        document.addEventListener('readystatechange', handleReadyStateChange);
        return () => {
            document.removeEventListener('readystatechange', handleReadyStateChange);
        };
    }, []);


    return (



        <>
            {<div>

                {!props.home ? <div id={"loading"} className={isLoading ? "center-screen" : "none-loading"}>
                    <div className={"loading-uf"}>
                        <img placeholder="blur" src="/images/loading_logo.png" alt="Loading Logo" />
                    </div>
                </div> : <div className={`${!isLoading ? 'hidden-loading ' : 'loading'}`}>

                    <span>Be</span>
                    <span>on</span>
                    <span>top,</span>
                    <span>always!</span>
                </div>}
            </div>}
        </>
    );


}
