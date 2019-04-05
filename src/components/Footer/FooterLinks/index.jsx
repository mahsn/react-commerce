import React from 'react';
import boleto from './icons/boleto.svg';
import elo from './icons/elo.svg';
import americanexpress from './icons/american-express.svg';
import mastercard from './icons/mastercard.svg';
import paypal from './icons/paypal.svg';
import visa from './icons/visa.svg';
import telephone from './icons/telephone.svg';
import email from './icons/email.svg';
import {
    FooterContainer,
    FooterTitle,
    CategoryLinks,
    SupportInfo,
    FooterImage,
    FooterIcon,
    BorderDiv,
} from './styles';
import styled from 'styled-components';
import media from '../../../helpers/styles/mediaQuery';
import Dropdown from '../../Dropdown';

const DropdownContainer = styled.div`
    ${media.phoneLandscape`
        display:none;
    `}
`;

const footerLinks = [
    {
        title: 'Categories',
        links: [
            {
                title: 'Peças',
                path: 'xxx',
            },
            {
                title: 'Serviços',
                path: 'xxx',
            },
            {
                title: 'Manutenção',
                path: 'xxx',
            },
            {
                title: 'Sistema de Trocas',
                path: 'xxx',
            },
        ],
    },
    {
        title: 'Institucional',
        links: [
            {
                title: 'Quem Somos',
                path: 'xxx',
            },
            {
                title: 'Nosso Historia',
                path: 'xxx',
            },
            {
                title: 'Trabalhe Conosco',
                path: 'xxx',
            },
        ],
    },
    {
        title: 'Ajuda',
        links: [
            {
                title: 'Política de Privacidade',
                path: 'xxx',
            },
            {
                title: 'Política de Troca',
                path: 'xxx',
            },
            {
                title: 'Termos e Condições',
                path: 'xxx',
            },
            {
                title: 'FAQ',
                path: 'xxx',
            },
            {
                title: 'Fale Conosco',
                path: 'xxx',
            },
        ],
    },
    {
        title: 'Suporte',
        links: [
            {
                number: '080000000',
                email: 'ajuda@trucktransport.com.br',
                emailicon: [<FooterIcon src={email} height="20" width="20" />],
                numbericon: [<FooterIcon src={telephone} height="20" width="20" />],
                img: [
                    <FooterImage src={boleto} />,
                    <FooterImage src={elo} />,
                    <FooterImage src={americanexpress} />,
                    <FooterImage src={mastercard} />,
                    <FooterImage src={paypal} />,
                    <FooterImage src={visa} />,
                ],
            },
        ],
    },
];

const MainFooter = () => {
    return (
        <FooterContainer>
            {footerLinks &&
                footerLinks.map((footerLink, index) => {
                    return (
                        <dl key={index}>
                            <FooterTitle>{footerLink.title}</FooterTitle>
                            <DropdownContainer>
                                <Dropdown link={footerLink} />
                                <BorderDiv />
                            </DropdownContainer>
                            {footerLink.links &&
                                footerLink.links.map((link, index) => {
                                    return (
                                        <dt key={index}>
                                            <CategoryLinks href={link.path}>
                                                {link.title}
                                            </CategoryLinks>
                                            <SupportInfo>
                                                {link.numbericon}
                                                {link.number}
                                            </SupportInfo>
                                            <SupportInfo>
                                                {link.emailicon}
                                                {link.email}
                                            </SupportInfo>
                                            <div>{link.img}</div>
                                        </dt>
                                    );
                                })}
                        </dl>
                    );
                })}
        </FooterContainer>
    );
};

export default MainFooter;