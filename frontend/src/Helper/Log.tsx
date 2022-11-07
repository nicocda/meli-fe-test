import { FormatDate } from './FormatDateString';

export const Log = (text: string) => {
    const now = new Date();
    return console.log(`time: ${FormatDate(now)}, msg: ${text}`)
}


