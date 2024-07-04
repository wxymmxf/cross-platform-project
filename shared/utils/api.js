// shared/utils/api.js
export async function fetchData(endpoint) {
  const response = await fetch(endpoint)
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText)
  }
  return response.json()
}
