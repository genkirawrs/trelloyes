import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {

    //smoke test
        it('renders without crashing', () => {
          const div = document.createElement('div');
                
          ReactDOM.render(<Card key={'card_1'} title={'First Card'} content={'lorem ipsum'}/>, div);
          ReactDOM.unmountComponentAtNode(div);
        });


     //snapshot
        it('renders the UI as expected', () => {
          const tree = renderer
            .create(<Card key={'card_1'} title={'First Card'} content={'lorem ipsum'}/>)
            .toJSON();
          expect(tree).toMatchSnapshot();
        });
});
