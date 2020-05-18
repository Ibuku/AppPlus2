function createNode(element){
  return document.createElement(element);
}

function append (parent, el){
  return parent.appendChild(el);
}
const div = document.getElementsByClassName("title");
const url = 'https://api.appplus-sys.com//portal/home/';
fetch(url)
.then((resp)=> resp.json)
.then(function(data){
  let post = data.results;
  return title.map(function(title){
    let info = createNode('info'),
    img = createNode('img'),
    h1 = createNode('h1');
    img.src= author.picture.medium;
    info.innerHTML = '${author.name.name}';
  })
})
