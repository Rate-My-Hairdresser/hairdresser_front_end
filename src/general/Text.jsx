import styled from "styled-components";
import { colors } from "./colors"


export const HeaderText = styled.h1`
    margin: 0 0 1rem 0;
    color: ${colors.text.primary};
    text-align: center;
    font-family: 'DarkerGrotesque';
`
export const SubText = styled.p`
    overflow-wrap: break-word;
    color: ${colors.text.secondary};
    font-size: 14px;
    margin-top: 5px;
`

export const MiniHeaderText = styled.h4`
    color: ${colors.text.primary};
    font-size: 16px;
    margin: 0;
    font-weight: 500;
`

export const Title = styled.h1`
    font-size: 80px;
`