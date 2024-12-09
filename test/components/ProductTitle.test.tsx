import React from "react";
import { render } from "@testing-library/react";
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from './data/products';


describe('ProductTitle', () => {
    test('debe mostrar el componente correctamente con el título personalizado', () => {
        const { asFragment } = render(
            <ProductTitle title="Custom Product" className="custom-class" />
        );
    
        expect(asFragment()).toMatchSnapshot();
    });



    test('debe de mostrar el componente con el nombre del producto', () => {
        const { asFragment } = render(
            <ProductCard product={product1}>
                {() => <ProductTitle />}
            </ProductCard>
        );
    
        expect(asFragment()).toMatchSnapshot();
    });

});