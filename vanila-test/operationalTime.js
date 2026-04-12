const users = [
  { id: 1, name: "Al Amin", email: "alamin@gmail.com" },
  { id: 2, name: "Sara", email: "sara@gmail.com" },
  { id: 3, name: "John", email: "john@gmail.com" },
  { id: 4, name: "Emma", email: "emma@gmail.com" },
];

function findUserByEmail_noIndex(users, email) {
  let operations = 0;
  console.time("operation");
  for (let user of users) {
    operations++;
    if (user.email === email) {
      console.timeEnd("operation");
      return { user, operations };
    }
  }
  console.timeEnd("operation");
  return { user: null, operations };
}

// console.log(findUserByEmail_noIndex(users, "aemmaQ@gmail.com"));

function createEmailIndex(users) {
  const index = {};
  for (let user of users) {
    index[user.email] = user;
  }
  return index;
}

const indexUsers = createEmailIndex(users);

function findUserByEmailIndex(users, email) {
  console.time("Operations by index");
  const foundUser = { user: users[email] || null };
  console.timeEnd("Operations by index");
  return foundUser;
}

// console.log(findUserByEmailIndex(indexUsers, "emma@gmail.com"));

const findByNoIndex1 = findUserByEmail_noIndex(users, "emma@gmail.com");
console.log(findByNoIndex1);
console.log("No Index");
const findByIndex1 = findUserByEmailIndex(indexUsers, "emma@gmail.com");
console.log(findByIndex1);
