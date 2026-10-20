export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "iPhone 16",
        category: "Phones",
        price: 35000,
        description: "Apple smartphone with a powerful processor and a great camera."
    },
    {
        id: 2,
        name: "Samsung Galaxy S25",
        category: "Phones",
        price: 32000,
        description: "Samsung smartphone with a bright display and high performance."
    },
    {
        id: 3,
        name: "MacBook Air M4",
        category: "Laptops",
        price: 50000,
        description: "Lightweight Apple laptop for studying and working."
    },
    {
        id: 4,
        name: "ASUS Vivobook",
        category: "Laptops",
        price: 28000,
        description: "Laptop for everyday tasks, studying and entertainment."
    }
];
