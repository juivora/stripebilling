import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import TableContext from "../../context/table/TableContext";
import TableRow from "./TableRow";

export default function Table() {

    const categoryList = useContext(TableContext)
    const [Total, setTotal] = useState(0)

    const TableTr = styled.div({
        padding: '20px 12px 12px'
    })

    const TableTh = styled.div({
        color: '#fff',
        fontSize: '15px',
        fontWeight: '500'
    });

    const TableTd = styled.td({
        color: '#87a3b7',
        fontSize: '15px',
        fontWeight: '400',
        padding: '20px 12px 12px'
    });

    const SpanStyled = styled.span({
        fontSize: '21px',
        color: '#fff',
        fontWeight: 500
    })

    const animateValue = (obj: any, start: number, end: number, duration: number) => {
        let startTimestamp: any = null;
        const step = (timestamp: any) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = '$ ' + Math.floor(progress * (end - start) + start).toFixed(2);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

 
    useEffect(() => {
        let newTotal = 0
        const obj = document.getElementById("total");
        categoryList.state.map((i: any) => {
            if (i.status == true) {
                i.tableData.map((data: any) => {
                    if (data.type == "discount") {
                        animateValue(obj, newTotal, newTotal - data.amount, 1000);
                        newTotal = newTotal - data.amount
                        // console.log('discpount', newTotal)
                    } else {
                        animateValue(obj, newTotal, newTotal + data.amount, 1000);
                        newTotal = newTotal + data.amount
                        // console.log('newTotal', newTotal)
                    }
                })
            }
        })
        setTotal(newTotal)
    }, [categoryList])

    return (
        <div className="table-auto">
            <TableTr className="border-b-2 border-solid border-[#273c5c]">
                <div className="grid grid-cols-2 gap-1 justify-evenly">
                    <span>
                        <div className="text-white text-[15px] font-medium">
                            Description
                        </div>
                    </span>

                    <span className="grid grid-cols-3 gap-1 justify-evenly">
                        <div className="text-white text-[15px] font-medium">
                            Qty
                        </div>
                        <div className="text-white text-[15px] font-medium">
                            Price
                        </div>
                        <div className="text-white text-[15px] font-medium">
                            Amount
                        </div>
                    </span>
                </div>
            </TableTr>

            {categoryList.state.map((i: any, index: any) => {
                return (i.status === true &&
                    i.tableData.map((data: any) => {
                        return <TableRow data={data} />
                    })
                )
            })}


            <div className="grid grid-cols-2 gap-1 justify-evenly w-4/5 bottom-4 absolute pl-4 pr-28">
                <span className="text-[21px] text-white font-medium">
                    Total
                </span>
                <span className="text-[21px] text-white font-medium" id="total">
                    ${Total}
                </span>
            </div>
        </div>

    )
}