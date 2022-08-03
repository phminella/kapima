import ProductList from '../../components/ProductList';
import { useRouter } from 'next/router';
import { QUERY_PRODUCT_COUNT } from "../../lib/queries/productQueries";
import { useQuery } from "@apollo/client";
import { useDispatch } from 'react-redux';
import { setProductCount } from '../../store/productSlice'
const IndexPage = () => {
    const { data } = useQuery(QUERY_PRODUCT_COUNT);
    const dispatch = useDispatch();
    dispatch(setProductCount(data?.productsCount));
    const { query } = useRouter();
    const page = parseInt(query.page) || 1;
    return (
        <>
            <ProductList page={page}></ProductList>
        </>
    )
}
export default IndexPage;
