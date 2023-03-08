export default defineEventHandler(async (event) => {

    //handle query event
    // const { name } = getQuery(event)

    //handle post data
    // const { age } = await readBody(event)

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=4fR2AnSs0aXTOkRhHunCP7zwljtRJu2pvhyWKzu6')

    return data
})