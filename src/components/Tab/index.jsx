import React, { Component, Fragment } from 'react';
import { TabContainer, Content, Tabs, Title, TitleDiv } from './styles';
import colors from '../../helpers/styles/colors';

const tabs = [
    {
        title: 'Sobre o Produto',
    },
    {
        title: 'Informações técnicas',
    },
    {
        title: 'Avaliações',
    },
];

class TabComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: '',
            displayContent: false,
            content:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ' +
                "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't " +
                'anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, ' +
                'making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, ' +
                'to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        };

        this.showTabContent = this.showTabContent.bind(this);
        this.hideTabContent = this.hideTabContent.bind(this);
    }

    showTabContent() {
        this.setState({ displayContent: true }, () => {
            document.addEventListener('click', this.hideTabContent);
        });
    }

    hideTabContent() {
        this.setState({ displayContent: false }, () => {
            document.removeEventListener('click', this.hideTabContent);
        });
    }
    render() {
        return (
            <Fragment>
                <TabContainer>
                    {tabs &&
                        tabs.map((item, index) => {
                            return (
                                <Tabs key={index}>
                                    <TitleDiv
                                        style={
                                            this.state.displayContent
                                                ? { backgroundColor: colors.primary }
                                                : { backgroundColor: colors.alternativeLight }
                                        }
                                        onClick={this.showTabContent}
                                    >
                                        <Title
                                            style={
                                                this.state.displayContent
                                                    ? { color: colors.white }
                                                    : { color: colors.alternative }
                                            }
                                        >
                                            {item.title}
                                        </Title>
                                    </TitleDiv>
                                </Tabs>
                            );
                        })}
                </TabContainer>
                <Content>{this.state.displayContent ? this.state.content : null}</Content>
            </Fragment>
        );
    }
}

export default TabComponent;
