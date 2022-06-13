const ACTION_URL = 'https://25.javascript.pages.academy/kekstagram';


function sendData(body) {
  fetch(ACTION_URL, {
    method: 'POST',
    body
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}


export { sendData };
