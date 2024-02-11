import { dataUrl , reposQuantity } from '/src/scripts/variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${dataUrl}${userName}/repos?per_page=${reposQuantity}`)
    return await response.json()
}

export { getRepositories }