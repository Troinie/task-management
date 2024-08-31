module.exports = (objectPagination, query, countRecords) => {
    if (query.page) {
        objectPagination.currentPage = parseInt(query.page);
    }


    if (query.limit) {
        objectPagination.currentPage = parseInt(query.limit);
    }

    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

    const totalPage = Math.ceil(countProducts / objectPagination.limitItems);

    objectPagination.totalPage = totalPage;

    return objectPagination;
}