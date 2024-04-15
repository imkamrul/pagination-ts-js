import * as react_jsx_runtime from 'react/jsx-runtime';

declare const Pagination: ({ handlePageChange, currentPage, totalPage, customStyle, }: {
    handlePageChange: React.Dispatch<React.SetStateAction<number>> | ((page: number) => void);
    currentPage: number;
    totalPage: number;
    customStyle?: string;
}) => react_jsx_runtime.JSX.Element;

export { Pagination };
