export function renderUser(user) {
    const list = document.createElement("ul");
    const liName = document.createElement("li");
    liName.innerText = user.name;
    const Id = document.createElement("p");
    Id.innerText = `Id: ${user.id}`;

    const Age = document.createElement("p");
    Age.innerText = `Age: ${user.age}`;
    const Email = document.createElement("p");
    Email.innerText = `Email: ${user.email}`;
    const Country = document.createElement("p");
    Country.innerText = `Country: ${user.country}`;
    const Company = document.createElement("p");
    Company.innerText = `Company: ${user.company}`;
    const Birthday = document.createElement("p");
    Birthday.innerText = `Birthday: ${user.birthday}`;
    list.append(liName);
    liName.append(Id);

    liName.append(Age);
    liName.append(Email);
    liName.append(Country);
    liName.append(Company);
    liName.append(Birthday);
    document.body.append(list);
    console.log(list);
}