import { createContext, useState } from "react";

const [Data, setData] = useState(undefined);

TableContext = createContext({ Data, setData });

const TableContextProvider = ({ children }) => {
    return (
        <TableContext.Provider value={{ Data, setData }}>
            {...children}
        </TableContext.Provider>
    );
};

export { TableContext, TableContextProvider };