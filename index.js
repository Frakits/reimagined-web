for (let a of document.querySelectorAll(".navbar-options")) {
	console.log("h");
	a.addEventListener("click", e => {
		for (let ad of document.querySelectorAll(".navbar-options")) {
			ad.id = ""
			document.querySelector(`${ad.href.slice(ad.href.indexOf("#"))}`).style.display = "none"
		}
		a.id = "ACTIVE";
		document.querySelector(`${a.href.slice(a.href.indexOf("#"))}`).style.display = "inherit";
		e.preventDefault();

        document.querySelector(`${a.href.slice(a.href.indexOf("#"))}`).scrollIntoView({
            behavior: 'smooth'
        });
	})
}