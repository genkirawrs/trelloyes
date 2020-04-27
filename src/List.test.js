import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './store';


describe('List component', () => {

        const listStore = STORE.lists[0];
        const allCards = STORE.allCards;
        const cards = listStore.cardIds;
        let cardsInfo = [];

        cards.forEach(function(item){

                cardsInfo.push({
                    id: item,
                    title:  allCards[item]['title'],
                    content: allCards[item]['content']
                });
        });

    //smoke test
	it('renders without crashing', () => {
	  const div = document.createElement('div');

	  ReactDOM.render(<List key={'list_1'} header={'First list'} cards={cardsInfo} />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


     //snapshot
	it('renders the UI as expected', () => {
	  const tree = renderer
	    .create(<List key={'list_1'} header={'First list'} cards={cardsInfo}/>)
	    .toJSON();
	  expect(tree).toMatchSnapshot();
	});
});
