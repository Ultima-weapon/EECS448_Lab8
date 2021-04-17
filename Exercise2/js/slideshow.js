const image = document.getElementById("image");
const btnPrevious = document.getElementById("left");
const btnNext = document.getElementById("right");
const picList = [
	"photos/pic1.jpg",
	"photos/pic2.jpg",
	"photos/pic3.png",
	"photos/pic4.jpg",
	"photos/pic5.jpg"
];
const sizeOfPicList = picList.length
let currentPic = 0;

btnPrevious.onclick = function(){
	currentPic--;
	image.src = picList[((currentPic%sizeOfPicList)+sizeOfPicList)%sizeOfPicList];
}

btnNext.onclick = function(){
	currentPic++;
	image.src = picList[((currentPic%sizeOfPicList)+sizeOfPicList)%sizeOfPicList];
}