import Link from 'next/dist/client/link';
import Head from 'next/head';
import { PaginationStyle } from './styles/PaginationStyle';
import { paginationList } from '../lib/paginationList';

const Pagination = ({ page, pageCount }) => {
  const pageList = paginationList(page, pageCount);
  return (<>
    <PaginationStyle>
      <Head>
        <title>
          カピマ / Page {page} of {pageCount}
        </title>
      </Head>
      <div className='pages-list'>
        <ul>
          {page > 1 && pageList.length>1 &&
            <li>
              <Link href={`/products/${page - 1}`}>❮</Link>
            </li>
          }
          <li className={page === 1 ? "active-page" : ""}>
            <Link href={`/products/1`} >1</Link>
          </li>
          {(pageList[0] - 1) > 1 && <li>...</li>}
          {pageList && pageList.map(item =>
            <li className={item === page ? "active-page" : ""} key={item}>
              <Link href={`/products/${item}`}>{item}</Link>
            </li>
          )}
          {(pageList[pageList.length - 1] + 1) < pageCount && <li>...</li>}
          <li className={page === pageCount ? "active-page" : ""}>
            <Link href={`/products/${pageCount}`} >{pageCount}</Link>
          </li>
          {page < pageCount && pageList.length>1 &&
            <li>
              <Link href={`/products/${page + 1}`}>❯</Link>
            </li>
          }
        </ul>
      </div>
    </PaginationStyle>
  </>
  );
};
export default Pagination;
