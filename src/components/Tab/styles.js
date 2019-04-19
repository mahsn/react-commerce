import styled from 'styled-components';
import { colors, fonts, sizes } from '../../helpers/styles/index';
const TabContainer = styled.div`
    display: inline-flex;
    width: 100%;
    height: auto;
    background-color: ${colors.white};
    border-radius: 5px;
`;

const Tabs = styled.div`
    width: 100%;
    text-align: center;
`;

const TitleDiv = styled.div`
    height: 60px;
    border: 1px solid ${colors.alternativeLight};
    background-color: ${colors.alternativeLight};
`;

const Title = styled.span`
    display: block;
    margin: 15px auto;
    font-family: ${fonts.fontbase};
    font-size: ${sizes.large};
    font-weight: 700;
    line-height: 30px;
`;
const Content = styled.div`
    padding: 5%;
    text-align: left;
    line-height: 20px;
    line-space: 4px;
    line-break: auto;
    border: 1px solid ${colors.alternativeLight};
`;

export { TabContainer, Tabs, TitleDiv, Title, Content };
