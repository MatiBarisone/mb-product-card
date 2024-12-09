# MB-Product-Card-Test

Este es un paquete de pruebas de despliegue en NPM

### Autor: 

Matias Barisone

## Ejemplo

```
import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '????';
```

```
<ProductCard
    product={product}
    inicialValues={{ count: 4, maxCount: 10 }}
>
    {
        ({ reset, increaseBy, count, isMaxCountReached, maxCount}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons  />
            </>
        )
    }

</ProductCard>
```