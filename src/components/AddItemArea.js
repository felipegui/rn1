import React, { useState } from 'react';
import styled from 'styled-components';

const Add = styled.View`
    background-color: #CCC;
    padding: 10px;
`;
const AddItemInput = styled.TextInput`
    background-color: #FFF;
    font-size: 15px;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
`;

export default (props) => {
    const [item, setItem] = useState('');

    const hanbleSubmit = () => {
        if ( item.trim() != '' ) {
            props.onAdd(item.trim());
            setItem('');
        }
    }

    return (
        <Add>
            <AddItemInput
                placeholder="Digite um novo item..."
                value={item}
                onChangeText={event => setItem(event)}
                onSubmitEditing={hanbleSubmit}
                returnKeyType="send"
            />
        </Add>
    );
}