import * as React from 'react';
import {useEffect} from "react";

const LandingPage: React.FC = (props: any) => {
    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            let domClass = '';
            for (let i = 0; i < domList.length; i++) {
                const record = domList[i];
                if (document.getElementsByClassName(record)) {
                    let ele: any = document.getElementsByClassName(record)[0]
                    const positionBottomDom = ele.getBoundingClientRect().bottom;
                    if (positionBottomDom > 0) {
                        domClass = record;
                        break;
                    }
                }
            }

            console.log(domClass)

        });
    },[]);
    const domList: any[] = ["one", "two", "three", "four", "five"];
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-3"}>
                        {
                            domList.map((record)=>(
                                <div className={'menu-item'} key={record}>
                                    {record}
                                </div>)
                            )
                        }

                    </div>
                    <div className={"col-9"}>
                        <div className={'main-container'}>
                        {domList.map(record => {
                            let classToAssign = "section " + record;
                            return (
                                <div className={classToAssign} key={record}>
                                    This is: {record}
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};


export default LandingPage;

