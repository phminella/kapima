import Reset from "../components/Reset";
import ResetPassword from "../components/ResetPassword";
const resetPage = ({ query }) => {
    if (!query?.token) {
        return <ResetPassword></ResetPassword>
    }
    return <Reset query={query} />;
};
export default resetPage;