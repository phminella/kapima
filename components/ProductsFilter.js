import { ProductsFilterStyle } from './styles/ProductsFilterStyle';
import { useSelector, useDispatch } from 'react-redux';
import { setPerPage } from '../store/productSlice';
import { useState } from 'react';

const ProductsFilter = ({ page, pageCount, productCount }) => {
    const dispatch = useDispatch();
    const perPage = useSelector((state) => state.product.perPage);
    const [selectedPerPage, setSelectedPerPage] = useState(perPage);
    const perPageChangeHandler = (e) => {
        dispatch(setPerPage(parseInt(e.target.value)));
        setSelectedPerPage(parseInt(e.target.value));
    }
    return (
        <ProductsFilterStyle>
            <div className='products-description'>
                Page <span>{page}</span> of <span>{pageCount}</span>, <span>{productCount}</span> products.
            </div>
            <div className='products-filter'>
                <ul>
                    <li>Products per page
                        <select value={selectedPerPage} onChange={perPageChangeHandler}>
                            <option value="4">4</option>
                            <option value="8">8</option>
                        </select>
                    </li>
                </ul>
            </div>
        </ProductsFilterStyle>
    )
}

export default ProductsFilter;