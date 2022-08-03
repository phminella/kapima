export const paginationList = (currentPage, pageCount) => {
    let afterCurrentPage = [];
    let beforeCurrentPage = [];
    let pagesList = [];
    for (let i = (currentPage + 1); i < pageCount; i++) {
        afterCurrentPage.push(i);
        if (i > (currentPage + 2)) {
            break;
        }
    }
    for (let i = (currentPage - 1); i > 1; i--) {
        beforeCurrentPage.push(i);
        if (i < (currentPage - 3)) {
            break;
        }
    }
    if (currentPage !== 1 && currentPage !== pageCount) {
        pagesList = [...beforeCurrentPage, currentPage, ...afterCurrentPage];
    }
    else {
        pagesList = [...beforeCurrentPage, ...afterCurrentPage];
    }
    return pagesList.sort((a, b) => { return a - b });
}