{
    function formatString(text: string, toUpperCase?: boolean): string {
        if(toUpperCase === false){
            return text.toLowerCase();
        }else {
            return text.toUpperCase();
        }
    }


    
}