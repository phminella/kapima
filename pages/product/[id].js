import SingleProduct from '../../components/SingleProduct';

const singleProductPage = ({ query }) => <SingleProduct id={query?.id} />;
export default singleProductPage;
