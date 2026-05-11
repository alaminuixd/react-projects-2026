const mapValues = (obj, fn = (v) => v) => {
  return Object.keys(obj).reduce((accu, key) => {
    // key = [title, bio]
    accu[key] = fn(obj[key], key);
    return accu;
  }, {});
};

const state = {
  title: { value: "Dev", error: "" },
  bio: { value: "Hello", error: "" },
};

const res0 = mapValues(state, (val, key) => val);
const res1 = mapValues(state, (val, key) => (val["error"] = `Invalied ${key}`));

console.log(res0);
console.log(res1);
