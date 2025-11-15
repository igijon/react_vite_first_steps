import { describe, test, expect } from 'vitest';
import {render, screen} from '@testing-library/react'

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        //container sólo se actualiza cuando llamamos a render
        const {container} = render(<MyAwesomeApp/>);
        //screen se actualiza con cualquier evento
        // screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Inma');
        expect(h3?.innerHTML).toContain('Gijón');
        
        
    })
    test('should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp/>);
        //screen se actualiza con cualquier evento
        screen.debug();

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Inma');
        
    })
})