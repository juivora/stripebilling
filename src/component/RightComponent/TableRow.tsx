import * as React from "react";

export default function TableRow(props: any) {  
    return (
        <div className="border-b-2 border-solid border-[#273c5c]">
            <div className="grid grid-cols-2 gap-1 justify-evenly">
                <span>
                    <div className="text-[#87a3b7] text-[15px] font-normal pt-4 pr-4 pb-4 ml-3">
                        {props.data.description}
                    </div>
                </span>
                <div className="grid grid-cols-3 gap-1 justify-evenly">
                    <div className="text-[#87a3b7] text-[15px] font-normal pt-4 pr-4 pb-4">
                        {props.data.qty}
                    </div>
                    <div className="text-[#87a3b7] text-[15px] font-normal pt-4 pr-4 pb-4">
                        {props.data.price !== '' &&
                            `$ ${props.data.price}`
                        }
                    </div>
                    <div className="text-[#87a3b7] text-[15px] text-right font-normal pt-4 pr-4 pb-4">
                       
                        {props.data.type === "discount" ?
                            `-$ ${props.data.amount}` :
                            props.data.amount !== '' &&
                            `$ ${props.data.amount}`
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
