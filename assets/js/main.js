const menuBtn = document.querySelector("#menu-btn");
const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
	sideMenu.classList.add("show-menu");
});

closeBtn.addEventListener("click", () => {
	sideMenu.classList.remove("show-menu");
});

// Change Theme
themeToggler.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme-variables");

	themeToggler.querySelector("span").classList.toggle("active");
});

// Fill Table with orders
order.forEach(order => {
	const tr = document.createElement("tr");
	const trContent = `
		<td>${order.productName}</td>
		<td>${order.productNumber}</td>
		<td>${order.paymentStatus}</td>
		<td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}">${order.shipping}</td>
		<td class="primary">Details</td>
	`

	tr.innerHTML = trContent;
	document.querySelector("table tbody").appendChild(tr);
});