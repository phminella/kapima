import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS_PERPAGE } from "../lib/queries/productQueries";
import Product from './Product';
import { ProductListStyle } from './styles/ProductListStyle';
import Pagination from '../components/Pagination';
import ProductsFilter from '../components/ProductsFilter';
import { useSelector } from 'react-redux';

const ProductList = ({ page }) => {
    const [perPage, productCount] = useSelector((state: any) => [state.product.perPage, state.product.productCount]);
    const pageCount = Math.ceil(productCount / perPage);
    if (page > pageCount) page = 1
    const { data, loading, error } = useQuery(QUERY_PRODUCTS_PERPAGE, {
        variables: {
            take: perPage,
            skip: (page - 1) * perPage
        }
    });;
    if (loading) { return <ProductListStyle><div className="spinner-wrapper"><img src="../img/icon-spinner.svg" alt="spinner" /></div></ProductListStyle> }
    if (error) return <p>Error</p>;
    return (
        <>
            <ProductsFilter page={page} pageCount={pageCount} productCount={productCount}></ProductsFilter>
            <Pagination page={page} pageCount={pageCount}></Pagination>
            <ProductListStyle>
                <ul>
                    {data.products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </ul>
            </ProductListStyle>
            <Pagination page={page} pageCount={pageCount}></Pagination>
        </>
    )
}

export default ProductList;