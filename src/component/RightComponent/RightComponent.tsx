import * as React from "react";
import Table from "./Table";

export default function RightComponent() {

    return (
        <div className="pr-100 border-2 border-[#0e365a] border-solid rounded-xl p-5 bg-[#0c2e4e]">
            <div className="mt-4 text-white text-[21px] text-center font-medium">Invoice</div>
            <h1 className="text-[15px] text-[#a4b1b7] text-center">Billing period from March 15th, 2021 to April 14th, 2021</h1>
            <Table />
        </div>
    );
   
}
