const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('location');

/**
 * wait necesita una función asyc
 */
async function displayUser(username) {

  try {
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    console.log(data);
    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  } catch (error) {
    console.error(`Algo salió mal: ${error}`);
  }

}

/* function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  err.textContent = `Algo salió mal: ${err}`
}
*/
displayUser('stolinski'); 