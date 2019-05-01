import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class SearchFilter extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button active badge vertical>
                            <Badge><Text>27</Text></Badge>
                            <Icon active name="cart" />
                            <Text>All</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="eye" />
                            <Text>Active</Text>
                        </Button>
                        <Button badge vertical>
                            <Badge ><Text>1</Text></Badge>
                            <Icon name="flag" />
                            <Text>Finished</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="trash" />
                            <Text>Removed</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }
}