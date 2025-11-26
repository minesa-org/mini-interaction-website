document.getElementById("copy-btn").onclick = () => {
	navigator.clipboard.writeText(document.getElementById("cmd").innerText);
};
