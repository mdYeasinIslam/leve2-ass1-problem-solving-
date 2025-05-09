{
    function formatString(text: string, toUpperCase?: boolean): string {
        if(toUpperCase === false){
            return text.toLowerCase();
        }else {
            return text.toUpperCase();
        }
    }

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(i => i.rating >= 4);
    }


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((ac, array) => [...ac, ...array], []);
    }
    
    
}