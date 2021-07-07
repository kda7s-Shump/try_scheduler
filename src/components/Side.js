import '../assets/css/style.css';

function Side() {
  const url = "http://localhost:5000";
  const handleErrors = function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      return response.json();
    }
  };
  function alertHello() {
    fetch( url+"/hello", {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then(handleErrors)
      .then(data => alert(data["message"]))
      .catch(error => alert(error))
  };

  return (
    <div id="Side">
      <button
        type="button"
        onClick={alertHello}
      >Flaskと繋がっているか確認</button>
      <h1>hoge</h1>
      hoge
    </div>
  );
}

export default Side;
