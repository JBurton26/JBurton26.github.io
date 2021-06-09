fetch("https://api.github.com/users/JBurton26/repos").then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error));
