import * as React from 'react';
import {useEffect} from "react";

const LandingPage: React.FC = (props: any)=>{
   useEffect(()=>{
       window.addEventListener('scroll', function(e) {
           let domClass = '';
         for(let i=0;i<domList.length;i++){
             const record = domList[i];
             if(document.getElementsByClassName(record)){
                 let ele:any = document.getElementsByClassName(record)[0]
                 const positionBottomDom = ele.getBoundingClientRect().bottom;
                 if(positionBottomDom>0){
                     domClass = record;
                     break;
                 }
             }
         }

           console.log(domClass)

       });
   });
 const domList: any[] = ["section1","section2","section3","section4","section5"];
    return (
        <>
            {domList.map(record=>{
                let classToAssign = "section "+record;
                return (
                    <div className={classToAssign }>
                        This is: {record}
                    </div>
                )
            })}

        </>
    )
};


export default LandingPage;

