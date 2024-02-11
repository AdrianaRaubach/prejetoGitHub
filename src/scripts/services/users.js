import { dataUrl } from '/src/scripts/variables.js'

async function getUser(userName) {
    const response = await fetch(`${dataUrl}${userName}`)
    return await response.json()
}

export { getUser }

