var count = 0;
const artists = {};
const sortable = [];
const songs = {};
const sortable2 = [];

function Artists(){
// Artists:
for(var j = 0; j<data.length; j++){
	if(data[j].header == 'YouTube Music'){
		if(data[j].subtitles){
			//console.log(data[j].subtitles[0].name);
			let artist = data[j].subtitles[0].name;
			if(artist in artists){
				artists[artist]++;
			}
			else{
				artists[artist] = 1;	
			}
			
			
		}
		
	}
}
for (var artist in artists) {
    sortable.push([artist, artists[artist]]);
}
sortable.sort((a, b) => (parseFloat(a[1]) <= parseFloat(b[1])) ? 1 : -1);	

console.log('Top 10 Artists:');
for(let i = 0; i<10; i++){
	console.log([sortable[i][0].slice(0, -8), sortable[i][1]]);
	
}
}




function Songs(){
	// Artists:
for(var j = 0; j<data.length; j++){
	if(data[j].header == 'YouTube Music'){
		if(data[j].title){
			let song = data[j].title;
			if(song in songs){
				songs[song]++;
			}
			else{
				songs[song] = 1;	
			}
			
			
		}
		
	}
}
for (var song in songs) {
    sortable2.push([song, songs[song]]);
}
sortable2.sort((a, b) => (parseFloat(a[1]) <= parseFloat(b[1])) ? 1 : -1);	

console.log('Top 20 Songs:');
for(let i = 0; i<20; i++){
	console.log([sortable2[i][0].substr(8), sortable2[i][1]]);
	
}
}

Artists();
Songs();