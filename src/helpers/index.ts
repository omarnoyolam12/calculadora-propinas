export const currencyFormat = (quantity: number) => {
    return new Intl.NumberFormat('en-ES', {
        style: 'currency', currency: 'USD'
    }).format(quantity);
}