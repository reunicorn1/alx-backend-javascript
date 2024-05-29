export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch((err) => { throw new Error(err); })
    .finally(() => console.log('Got a response from the API'));
}
