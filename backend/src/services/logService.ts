export const Log = (text: string) => {
    const time = new Date();
    const user = "NN";
    return console.log(`time: ${time}, user: ${user}, log: ${text}`)
}