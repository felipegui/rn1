import React, { useState } from 'react';
import styled from 'styled-components/native';
import uuid from 'uuid/v4';
import { SwipeListView } from 'react-native-swipe-list-view';

import Lista from './src/Lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.View`
  flex: 1;
  margin-top: 52px;
`;
const Listagem = styled.FlatList`
  flex: 1;
`;

export default function App() {
  const [ items, setItems ] = useState(Lista);

  const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push({
      id: uuid(),
      task: txt,
      done: false
    });
    setItems(newItems);
  }
  const toogleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  }
  const deleteItem = (index) => {
    let newItems = [...items];
    newItems = newItems.filter((it, i) => i != index);
    setItems(newItems);
  }

  return (
    <Page>
      <AddItemArea onAdd={addNewItem}/>
      <SwipeListView
        data={items}
        renderItem={({item, index}) => <ListaItem data={item} onPress={() => toogleDone(index)}/>}
        renderHiddenItem={({item, index}) => <ListaItemSwipe onDelete={() => deleteItem(index)}/> }
        leftOpenValue={50}
        disableLeftSwipe={true}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
}