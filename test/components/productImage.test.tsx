import React from "react";
import { render } from "@testing-library/react";
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from './data/products';


describe('ProductImage', () => {

    test('debe de mostrar el componente con la imagen personalizada', () => {
        const { asFragment } = render(
            <ProductCard product={product2}>
                {() => <ProductImage img="https://hola.jpg" />}
            </ProductCard>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con su imagen original', () => {
        const { asFragment } = render(
            <ProductCard product={product2}>
                {() => <ProductImage />}
            </ProductCard>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });

});