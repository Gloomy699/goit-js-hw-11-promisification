const result = document.querySelector(".js-task2");

const users = [
	{ name: 'Mango', active: true },
	{ name: 'Poly', active: false },
	{ name: 'Ajax', active: true },
	{ name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
	const updatedUsers = allUsers.map(user =>
		user.name === userName ? { ...user, active: !user.active } : user,
	);
	return Promise.resolve(updatedUsers);
};

const logger = updatedUsers => {
	console.table(updatedUsers);

	const tableColunmName = "<tr><th>Index</th><th>Name</th><th>isActive</th></tr>";
	const tableData = updatedUsers.map(({ name, active }, index) => `<tr><td>${index}</td><td>${name}</td><td>${active}</td></tr>`).join("");
	result.insertAdjacentHTML("beforeend", `<table>${tableColunmName}${tableData}</table>`);
}

//---------------------------
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);