let childArray = Array.from(document.querySelector(".navbar").children)
for (let a of document.querySelectorAll(".navbar-options")) {
	console.log("h");
	a.addEventListener("click", e => {
		for (let ad of document.querySelectorAll(".navbar-options")) {
			ad.style.translate = "0 0";
			ad.id = ""
			document.querySelector(`${ad.href.slice(ad.href.indexOf("#"))}`).style.display = "none"
		}
		a.id = "ACTIVE";
		document.querySelector(`${a.href.slice(a.href.indexOf("#"))}`).style.display = "inherit";
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

document.getElementById("ACTIVE").click();