import { useLayoutEffect } from "react";

const useScrollToTop = () => {
    useLayoutEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);

        return () => clearTimeout(timer);
    }, []);
}

export default useScrollToTop;