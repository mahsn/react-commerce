import styled from 'styled-components';
import { colors, fonts, sizes } from '../../../helpers/styles/index';

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
const Content = styled.p`
    padding: 5%;
    text-align: left;
    line-height: 20px;
    line-space: 4px;
    line-break: auto;
`;
export { Tabs, TitleDiv, Title, Content };
