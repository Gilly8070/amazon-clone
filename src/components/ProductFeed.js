import Product from "./Product"


function ProductFeed({products}) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md: -mt-52 mx-auto'>
            {
                products.slice(0,4).map(({ id, title, price, rating, description, category, image, hasPrime }) => (
                    <Product
                    key={id}
                        id={id}
                        // rating={rating}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                        image={image}
                        hasPrime={hasPrime}
                    />
                ))
            }
            <img src="https://links.papareact.com/dyz" className='md:col-span-full' alt="" />

            <div className='md:col-span-2'>
            {
                products.slice(4,5).map(({ id, title, price, rating, description, category, image, hasPrime }) => (
                    <Product
                    key={id}
                        id={id}
                        // rating={rating}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                        image={image}
                        hasPrime={hasPrime}
                    />
                ))
                }
            </div>
            
            {
                products.slice(5).map(({ id, title, price, rating, description, category, image, hasPrime }) => (
                    <Product
                    key={id}
                        id={id}
                        // rating={rating}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                        image={image}
                        hasPrime={hasPrime}
                    />
                ))
            }
            
        </div>
    )
}

export default ProductFeed
