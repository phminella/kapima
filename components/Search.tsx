import { SearchStyle } from './styles/SearchStyle.js';
import { DropDown, DropDownItem } from './styles/DropDown';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_PRODUCTS_QUERY } from '../lib/queries/searchQueries';
import { resetIdCounter, useCombobox } from 'downshift';
import { debounce } from "lodash";
import { useRouter } from 'next/router.js';
import Link from 'next/link.js';
let searchedProducts = [];
const Search = () => {
    resetIdCounter();
    const router = useRouter();
    const [searchProducts, { data, loading }] = useLazyQuery(SEARCH_PRODUCTS_QUERY, {
        fetchPolicy: 'no-cache'
    });
    if (data?.products) searchedProducts = data?.products;
    const { inputValue, getMenuProps, getInputProps, getComboboxProps, getItemProps, isOpen, highlightedIndex } = useCombobox({
        items: searchedProducts,
        onInputValueChange(input) {
            debounceSearch({
                variables: {
                    searchInput: input.inputValue
                }
            });
        },
        onSelectedItemChange({ selectedItem }) {
            //@ts-ignore
            router.push(`/product/${selectedItem?.id}`)
        },
        itemToString: (item: any) => item?.name || "",
    });
    const debounceSearch = debounce(searchProducts, 350);
    return (
        <SearchStyle>
            <div {...getComboboxProps()}>
                <input {...getInputProps({
                    type: "search",
                    placeholder: "Search!",
                    id: "search",
                    className: loading ? "loading" : ""
                })} />
            </div>
            <DropDown {...getMenuProps()}>
                {isOpen && searchedProducts.map((product, index) =>
                (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <DropDownItem
                            {...getItemProps({ item: product })}
                            highlighted={highlightedIndex === index ? "highlighted" : ""}
                        >
                            <img key={product.image.altText} src={product.image[0].image.publicUrlTransformed} alt={product.image[0].altText} height={50} width={50} />
                            {product.name}
                        </DropDownItem>
                    </Link>))}
                {isOpen && loading && <DropDownItem>Loading...</DropDownItem>}
                {isOpen && !searchedProducts.length && inputValue.length>1 && !loading && <DropDownItem>No products found for "{inputValue}"</DropDownItem>}
            </DropDown>
        </SearchStyle>
    )
};
export default Search;