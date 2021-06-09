import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FavoritesModal from '../FavoritesModal/index';
afterEach(cleanup);

test('renders favorite added toast test', ()=>{
        render(<FavoritesModal type={true} active={true}/>);
        const modal = screen.getByTestId('message');
        expect(modal).toBeInTheDocument();
        expect(modal).toHaveTextContent('Added to Favorites');
  
});
test('renders favorite removed toast test', ()=>{
    render(<FavoritesModal type={false} active={true}/>);
    const modal = screen.getByTestId('message');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('Removed From Favorites');

})