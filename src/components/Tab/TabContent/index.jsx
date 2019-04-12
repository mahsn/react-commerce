import React from 'react';
import { Tabs, TitleDiv, Title, Content } from './styles';
import { colors } from '../../../helpers/styles/index';

const tabColor = {
    'background-color': '#eaeaea',
};
class ControlledTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayContent: false,
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
            <Tabs>
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
                        {this.props.title}
                    </Title>
                </TitleDiv>
                <Content>{this.state.displayContent ? this.props.children : null}</Content>
            </Tabs>
        );
    }
}

export default ControlledTabs;
