import * as React from "react";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import TableContext from "../../context/table/TableContext";


export default function ThingsList(props: any) {
    const a = useContext(TableContext)
    const [isActive, setActive] = useState(false);
    const [data, setData] = useState(a.state)

    useEffect(() => {
        a.update(data)
    }, [data]);

    const toggleClass = () => {
        setActive(!isActive);
        const newState = a.state.map((obj: any, index: any) => {
            if (index == props.index) {
                return { ...obj, status: !isActive };
            }
            return obj;
        });

        setData(newState);
    };

    const Header = styled.h4({
        fontSize: '15px',
        fontWeight: '500',
        marginLeft: '5px',
        color: isActive ? '#fffefe' : '#71839b',

    });

    const SubHeader = styled.p({
        position: 'relative',
        fontSize: '15px',
        color: '#8b929f',
        fontWeight: '500',
        marginLeft: '25px'
    });


    return <li>
        <a
            className={isActive ? 'm-active nav-link' : "nav-link"}
            onClick={toggleClass}
            data-toggle="tab"
        >
            <div className="h-8 w-2/3 flex flex-wrap
                        content-center
                        bg-200 
                ">
                {isActive ?

                    <CheckCircleIcon className="h-5 w-5 text-500 text-[#ffce48]" />
                    :
                    <PlusCircleIcon className="hover:h-5 w-5 hover:text-[#fafcfd] h-4 w-4 text-[#5e7081]" />

                }
                <Header>
                    {props.title}
                </Header>
            </div>
            <SubHeader>
                {props.description}
            </SubHeader>
        </a>
    </li>

}
