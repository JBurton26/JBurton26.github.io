function getRepos(url){
  return fetch(url).then(response=>response.json()).then(data=>data).catch(error=>console.log(error));
}



var dataLists = getRepos("https://api.github.com/users/JBurton26/repos");
dataLists.then(data=>{
  for (const item of data) {
    console.log(item)
    var str = `
    <article>
      <span class="image">
        <img src="images/pic01.jpg" alt="" />
      </span>
      <header class="major">
        <h3><a href="landing.html" class="link">${item.name}</a></h3>

        <p>${item.description}</p>

      </header>
    </article>
    `;
    document.getElementById("one").innerHTML += (str);
  }
})
