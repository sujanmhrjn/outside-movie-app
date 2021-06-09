import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../Modal/index';
afterEach(cleanup);
// isActive, title, onCloseClick, children
test('should be in the document', ()=>{
        render(<Modal title="test heading" isActive={true}></Modal>);
        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
});

test("Should capture click", ()=>{
    let active = true;
    function handleClick(){
        active = !active;
    }   
    render(<Modal title="test heading" isActive={active} onCloseClick={handleClick}></Modal>);
    const modal = screen.getByTestId('modal');
    fireEvent.click(modal);
})