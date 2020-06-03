import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
    width: 100%;
    height: 50px;
    background-color: #FF0000;
    justify-content: center;
`;
const Image = styled.Image`
    width: 50px;
    height: 50px;
`;

export default (props) => {
    return (
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
            <Image source={require('../images/lixeira.png')}/>
        </ListaItemSwipe>
    );
}