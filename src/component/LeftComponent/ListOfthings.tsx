import * as React from "react";
import { useContext } from "react";
import ThingsList from "./ThingsList";
import TableContext from "../../context/table/TableContext";


export default function ListOfthings() {
    const categoryList = useContext(TableContext)
    return (
        <ul className="mt-8">
            {
                categoryList.state.map((i: any, index: any) => {
                    return (
                        <ThingsList
                            title={i.title}
                            description={i.description}
                            status={i.status}
                            key={index}
                            tableData={i.tableData}
                            index={index}
                        />
                    )
                })
            }
        </ul>
    );
}
