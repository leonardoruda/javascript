type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'Produto X', price: 10.00},
    {title: 'Produto Y', price: 29.90},
    {title: 'Produto Z', price: 50.25},
    {title: 'Produto G', price: 99.99},
    {title: 'Produto XYZ', price: 59.90},
    {title: 'Produto da Casa', price: 34.75},
    {title: 'Produto H', price: 72.50},
    {title: 'Produto mais vendido', price: 1.99}
]

export const Product = {
    getAll: (): Product[] => data,
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    },
    getByName: (title: string): Product[] => data.filter(item => item.title == title)
};