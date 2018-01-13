var Media = [
	{
		title: 'Dylan',
		author: 'Bob Dylan',
		genre: 'rock',
		minutes: '34',
		myPhoto: 'img/dylan.jpg'
	},

	{
		title: 'City Lights',
		author: 'Charlie Chaplin',
		genre: 'romantic comedy',
		publisher: 'United Artists',
		minutes: '87',
		myPhoto: 'img/citylights.jpg'
	},

	{
		title: 'Lawrence of Arabia',
		author: 'T.E.Lawrence',
		genre: 'historical drama',
		publisher: 'Columbia Pictures',
		mintues: '222',
		myPhoto: 'img/Lawrence.jpg'
	},

	{
		title: 'Diamond Life',
		author: 'Sade',
		genre: 'smooth soul',
		publisher: 'Epic',
		rating: '5',
		minutes: '45',
		myPhoto: 'img/sade.jpg'
	},

	{
		title: 'Woodwalkers',
		author: 'Katja Brandis',
		genre: 'belletristik',
		publisher: 'Bild',
		rating : '5',
		weight: '1kg',
		myPhoto: 'img/woodwalkers.jpg'
	},

	{
		title: 'Foundation',
		author: 'Isaac Asimov',
		genre: 'fantasy science fiction',
		publisher: 'Heyne',
		rating: '3',
		weight: '2kg',
		myPhoto: 'img/fondation.jpg'
	},

	{
		title: 'The Sandman',
		author: 'Neil Gaiman',
		genre: 'fantasy',
		publisher: 'Vertigo',
		myPhoto: 'img/Sandman.jpg'

	},

	{
		title: 'Modesty Blaise',
		author: "Peter O'Donnell",
		genre: 'mystery',
		publisher: 'Titan Books',
		myPhoto: 'img/modesty1.jpg'
	}];


for (var i = 0; i < Media.length; i++) {
	
	var row = document.getElementById('raw');

	row.innerHTML +=


						//STRUCTURE FOR ELEMENTS

`
				<div class="col-12 col-md-6 col-lg-3 columns" id="${Media[i].title.replace(/\s+|#/g, '')}">
					<div class=" row">
						<div class="col-6 col-md-6">
							<img class="img-thumbnail" src="${Media[i].myPhoto}">
						</div>
						<div class="col-6 col-md-6">
							<h3>${Media[i].title}</h3>
							<p>Author: ${Media[i].author}</p>
							<p>published: ${Media[i].publisher}</p>

						</div>
					</div>
				</div>	`;
}



//ps: apologies for the poor work, I figured out the solution way too late, i just couldnt move on to something else