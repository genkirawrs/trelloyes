import React from 'react';
import List from './List';

import './App.css';

function App(props) {
    const listStore = props.store.lists;
    const allCards = props.store.allCards;
    const lists = listStore.map( function(item){
	const cards = item.cardIds;
	let cardsInfo = [];

	cards.forEach(function(item){

		cardsInfo.push({
		    id: item,
		    title:  allCards[item]['title'],
		    content: allCards[item]['content']
		});
	});
	return <List key={'list_'+item.id} header={item.header} cards={cardsInfo}/>
    });


  return (
    <main className='App'>
	<header className='App-header'>
	    <h1>Trelloyes!</h1>
	</header>
	<div className='App-list'>
	    {lists}
	</div>
    </main>
  );
}

export default App;
