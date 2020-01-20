// Preloader page
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 4000);
  })
}

loadData()
.then(() => {
	let preloaderEl = document.getElementById('preloader');
    	preloaderEl.classList.add('hidden');
    	preloaderEl.classList.remove('visible');
});

//Random user genertor
function createNode(element) {
  	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

let div = document.getElementById('authors');
let number = Math.round(Math.random()*100);
let url = 'https://randomuser.me/api/?results=';
let randomUsers = `${url}${number}`;

fetch(randomUsers)
	.then((resp) => resp.json())
	.then(function(data) {
let authors = data.results;
	return authors.map(function(author) {
		let li = createNode('li'),
      		img = createNode('img'),
      		p = createNode('p'),
      		span = createNode('span'),
      		b = createNode('b'),
      		i = createNode('i'),
      		code = createNode('code'),
      		kbd = createNode('kbd'),
      		samp = createNode('samp');

  		img.src = `${author.picture.large}`;
  		p.innerHTML = `${author.name.title} ${author.name.first} ${author.name.last}`;
  		span.innerHTML = `${author.gender}`;
  		b.innerHTML = `${author.phone}`;
  		i.innerHTML = `${author.email}`;
  		code.innerHTML = `${author.location.state}, ${author.location.city}, ${author.location.street.name}, ${author.location.street.number}`;
  		kbd.innerHTML = `<span>Date of birth:</span> ${new Date(author.dob.date).toLocaleDateString()}`;
  		samp.innerHTML = `<span>Date of registration:</span> ${new Date(author.registered.date).toLocaleDateString()}`;
  		append(div, li);
  		append(li, img);
  		append(li, p);
  		append(li, span);
  		append(li, b);
  		append(li, i);
  		append(li, code);
  		append(li, kbd);
  		append(li, samp);
	})
})
.catch(function(error) {
	console.log(error);
});
