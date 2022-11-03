export const PriceFormat = ({ price, decimals = 2 }: { price: number, decimals: number | undefined }) => {
    if (!price)
        return null;

    let stringPrice = price.toFixed(decimals === 0 ? 2 : decimals).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    //used & like aux to interchange . y , 
    stringPrice = stringPrice.replace(',', '&').replace('.', ',').replace('&', '.');

    const prices = stringPrice.split(',');
    if (decimals === 0)
        return { left: prices[0], right: '' }


    return { left: prices[0], right: prices[1] };


}
