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

    
    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make; 
            this.year = year;
        }

        getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel(): string {
            return `Model: ${this.model}`;
        }
    }

    
}