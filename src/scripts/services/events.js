import { dataUrl , eventQuantity } from '/src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`${dataUrl}${userName}/events?per_page=${eventQuantity}`)
    return await response.json()
}

export { getEvents }

//https://api.github.com/users/adrianaraubach/events

