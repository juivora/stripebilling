import { useState } from 'react';
import TableContext from './TableContext';
import initialState from "../../data/lefticon.json";

const TableDataState = (props) => {
    const s1 = initialState.lists
    const [state, setState] = useState(s1)

    const update = (data) => {
        setState(data)
    }
    return (
        <TableContext.Provider value={{ state, update }}>
            {props.children}
        </TableContext.Provider>
    )
}

export default TableDataState;