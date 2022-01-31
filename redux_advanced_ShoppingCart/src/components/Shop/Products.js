import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const mock_products = [
    {
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
      id: 0,
    },
    {
      title: "Test2",
      price: 80,
      description: "This is a second product - great!",
      id: 1,
    },
    {
      title: "Test3",
      price: 47,
      description: "This is a third product - meh!",
      id: 2,
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {mock_products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            id={product.id}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
