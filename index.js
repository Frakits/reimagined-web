let childArray = Array.from(document.querySelector(".navbar").children)
let indexImg = 0;
let parentImg = null;
for (let a of document.querySelectorAll(".navbar-options")) {
	a.addEventListener("click", e => {
		for (let ad of document.querySelectorAll(".navbar-options")) {
			ad.style.translate = "0 0";
			ad.id = ""
			document.querySelector(`${ad.href.slice(ad.href.indexOf("#"))}`).style.display = "none"
		}
		a.id = "ACTIVE";
		let category = document.querySelector(`${a.href.slice(a.href.indexOf("#"))}`);
		category.style.display = "inherit";
		e.preventDefault();
	})
	a.addEventListener('mouseover', e => {
		if (a.id == "ACTIVE") return;
		for (let ad of document.querySelectorAll(".navbar-options")) {
			let amount = 6 * (ad.id == "ACTIVE" ? 2 : 1);
			if (ad != a) ad.style.translate = (childArray.indexOf(ad) < childArray.indexOf(a) ? `-${amount}% 0` : `${amount}% 0`);
		}
	})
	a.addEventListener('mouseout', e => {
		for (let ad of document.querySelectorAll(".navbar-options")) {
			if (ad != a) ad.style.translate = "0 0";
		}
	})
}

for (let img of document.querySelectorAll(".gallery-space > img")) {
	img.addEventListener("click", e => {
		parentImg = img.parentElement.querySelectorAll("img");
		indexImg = Array.from(parentImg).indexOf(img);
		document.querySelector(".fullscreen-image").style.display = "flex";
		document.querySelector(".fullscreen-image-content").src = img.src;
	})
	img.addEventListener("mouseover", e => {
		for (let img2 of document.querySelectorAll(".gallery-space > img")) {
			let top = img2.getBoundingClientRect().top - img.getBoundingClientRect().top;
			let left = img2.getBoundingClientRect().left - img.getBoundingClientRect().left;
			if (Math.abs((left + top) / 2) < 100) img2.style.translate = `${left / 100}px ${top / 100}px`
		}
	})
	img.addEventListener("mouseout", e => {
		for (let img2 of document.querySelectorAll(".gallery-space > img")) {
			img2.style.translate = `0 0`;
		}
	})
}

document.querySelector(".fullscreen-image").addEventListener("click", e => {
	document.querySelector(".fullscreen-image").style.display = "none";
	return false;
})

document.getElementById("ACTIVE").click();

document.querySelector("#LEFT.fullscreen-image-button").addEventListener("click", e => {
	indexImg = mod(indexImg - 1, parentImg.length);
	changeImage(indexImg);
	e.stopPropagation();
})

document.querySelector("#RIGHT.fullscreen-image-button").addEventListener("click", e => {
	indexImg = mod(indexImg + 1, parentImg.length);
	changeImage(indexImg);
	e.stopPropagation();
})

function changeImage(index) {
	document.querySelector(".fullscreen-image-content").src = parentImg[index].src;
}

function mod(n, m) {
	return ((n % m) + m) % m;
}