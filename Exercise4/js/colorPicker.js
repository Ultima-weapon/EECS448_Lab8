const docBody = document.getElementsByTagName("body")[0];
const docP = docBody.getElementsByTagName("p")[0];

const inputTextColor = document.getElementById("textcolor");
const inputBackColor = document.getElementById("backcolor");
const inputEdgeColor = document.getElementById("edgecolor");
const inputEdgeWidth = document.getElementById("edgewidth");

const btnChanges = document.getElementById("submit");

btnChanges.onclick = function() {
	docP.style.color = inputTextColor.value;
	docP.style.backgroundColor = inputBackColor.value;
	docP.style.borderColor = inputEdgeColor.value;
	docP.style.borderWidth = inputEdgeWidth.value + "px";
}
