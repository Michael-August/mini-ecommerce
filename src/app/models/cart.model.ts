export interface ICart {
    id: number;
    img: string;
    name: string;
    sizes: string[];
    price: number;
    colors: string[];
    description: string;
    thumbnails: string[]
    quantity: number
    selectedColor: string
    selectedSize: string
}