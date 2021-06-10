function getResp(url){
  return fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.mercy-preview+json'
    }
  }).then(response=>response.json()).then(data=>data).catch(error=>console.log(error));
}

var dataLists = getResp("https://api.github.com/users/JBurton26/repos");
dataLists.then(data=>{
  for (const item of data) {
    //TODO Languages need to be added.
    var langsList = ""
    //console.log(item)

    getResp(item.languages_url).then(dlang=>{
      for (const key in dlang){
        console.log(key)
      }
    });


    var str = `
    <article>
      <span class="image">
        <img src="images/pic01.jpg" alt="" />
      </span>
      <header class="major">
        <h3><a href="${item.html_url}" class="link">${item.name}</a></h3>
        <h5></h5>

        <p>${item.description}</p>

      </header>
    </article>
    `;

    document.getElementById("one").innerHTML += (str);
  }
});
