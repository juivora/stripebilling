import * as React from "react";
import styled from "styled-components";
import ListOfthings from "./ListOfthings";

const WrapperDiv = styled.div({
    paddingRight: '100px'
})


export default function LeftComponent() {
    return (
        <WrapperDiv>
            <h2 className="text-[#ffc946] text-[18px] font-medium">Granular control</h2>
            <h1 className="ralative font-medium text-[38px] text-[#fffefe]">Effortlessly design and test pricing plans</h1>
            <div className="text-[18px] text-[#8b929f] font-normal">
                Iterate on your pricing as quickly as you improve your product with Stripe’s flexible subscription billing components.
            </div>
            <ListOfthings />
        </WrapperDiv>
    );
}
