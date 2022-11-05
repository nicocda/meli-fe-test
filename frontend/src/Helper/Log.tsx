export const Log = (text: string) => {
    const time = new Date();
    const user = "NN";
    return console.log(`time: ${time.toDateString()} ${time.toTimeString()}, user: ${user}, log: ${text}`)
}