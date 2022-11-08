document.getElementById('add_url').addEventListener('submit', function(e){
    e.preventDefault();
    var  url_val = document.getElementById('url_field').value;
    axios.post('http://localhost:3000/api/shorten_url', {
        url: url_val
      })
      .then(function (response) {
        let span_el = document.getElementById("msg_span");
        if (response.data.message == "success"){
            span_el.classList.add("success_msg");
            span_el.innerHTML = "URL added Successfully<br/>Your URL is: http://localhost:3000/su/"+ response.data.code;
        } else {
            span_el.classList.add("error_msg");
            span_el.innerText = "Some error occured.<br/>Error code: "+ response.data.code;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
});