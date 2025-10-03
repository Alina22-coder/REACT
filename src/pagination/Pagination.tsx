import {useSearchParams} from "react-router";

export const Pagination =() => {
    const [query, setQuery] = useSearchParams({pg:'1'});
    const currentPage = Number(query.get('pg') || '1');

    const page = (page: number) => {
        if (page < 1) return;
        setQuery({pg: page.toString()})
    }

    return (
        <div className='pagination'>
            <button
                disabled={currentPage <= 1}
                onClick={() => {
                    if(currentPage) {
                        page((currentPage - 1));
                    }
                }}
            >prev</button>
            <button
                onClick={() => {
                    if(currentPage) {
                        page((currentPage + 1));
                    }
                }}
            >next</button>
        </div>
    )
}