interface Paginate<T> {
    docs: T[],
    totalDocs: number,
    limit: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    page: number,
    totalPages: number,
    pagingCounter: number,
    prevPage: number,
    nextPage: number;
}