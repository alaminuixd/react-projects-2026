// 🔹 Generate a LARGE dataset
const users = [];
for (let i = 0; i < 1_000_000; i++) {
  users.push({
    id: i,
    name: `User${i}`,
    email: `user${i}@mail.com`,
  });
}

const user99 = users.filter((user) => user.id < 100);
console.log(user99);

// 🔹 Linear Search (O(n))
function findUserByEmail_noIndex(users, email) {
  let operations = 0;
  let foundUser = null;

  const start = performance.now();

  for (let user of users) {
    operations++;
    if (user.email === email) {
      foundUser = user;
      break;
    }
  }

  const end = performance.now();

  return {
    user: foundUser,
    operations,
    time: (end - start).toFixed(3) + " ms",
  };
}

// 🔹 Create Index (O(n) upfront)
function createEmailIndex(users) {
  const start = performance.now();

  const index = {};
  for (let user of users) {
    index[user.email] = user;
  }

  const end = performance.now();

  console.log(`Index creation time: ${(end - start).toFixed(3)} ms`);
  return index;
}

// 🔹 Indexed Lookup (O(1))
function findUserByEmailIndex(index, email) {
  const start = performance.now();

  const user = index[email] || null;

  const end = performance.now();

  return {
    user,
    time: (end - start).toFixed(6) + " ms",
  };
}

// 🔹 Create index
const indexUsers = createEmailIndex(users);

// 🔹 Test email (worst-case for linear search)
const testEmail = "user999999@mail.com";

console.log("\n--- Linear Search ---");
const result1 = findUserByEmail_noIndex(users, testEmail);
console.log(result1);

console.log("\n--- Indexed Search ---");
const result2 = findUserByEmailIndex(indexUsers, testEmail);
console.log(result2);
