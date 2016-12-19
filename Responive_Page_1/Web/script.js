function color(){
	
	document.getElementById("green").style.backgroundColor = getRandomColor();

	document.getElementById("indigo").style.backgroundColor = getRandomColor();

	document.getElementById("magenta").style.backgroundColor = getRandomColor();

	document.getElementById("MediumSpringGreen").style.backgroundColor = getRandomColor();

}

function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
    color();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

