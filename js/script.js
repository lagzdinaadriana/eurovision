var showCountriesButton = document.getElementById("showCountriesButton");
var countriesContainer = document.getElementById("countriesContainer");
var songInfo = document.getElementById("songInfo");
var songName = document.getElementById("songName");
var artistName = document.getElementById("artistName");
var youtubeVideo = document.getElementById("youtubeVideo");


var countryListItems = document.querySelectorAll('#countriesContainer ul li[data-country]');
countryListItems.forEach(function(item) {
    item.addEventListener("click", function() {
        var countryName = item.getAttribute("data-country");
        var songData = getSongData(countryName);
        
        displaySongInfo(songData);
    });
});


function displaySongInfo(songData) {
    songName.textContent = songData.song;
    artistName.textContent = songData.artist;
    youtubeVideo.innerHTML = '<iframe width="560" height="315" src="' + songData.videoUrl + '" frameborder="0" allowfullscreen></iframe>';
    songInfo.style.display = "block";
}

