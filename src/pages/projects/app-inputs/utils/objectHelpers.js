/**
 * Checks whether an object has no own enumerable properties.
 *
 * @param {Object} obj - The object to check.
 * @returns {boolean} True if the object has no keys, otherwise false.
 *
 * @example
 * isObjEmpty({}); // true
 * isObjEmpty({ a: 1 }); // false
 */
export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Creates a deep clone of a JSON-safe value (object or array).
 *
 * ⚠️ Note: This method does NOT support functions, undefined,
 * Date objects, Map, Set, or circular references.
 *
 * @param {any} obj - The value to deep clone (object or array).
 * @returns {any} A new deeply cloned copy of the input.
 *
 * @example
 * deepClone({ a: 1, b: { c: 2 } });
 * deepClone([1, { x: 2 }, [3]]);
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Extracts the `.value` property from each field in a form state object.
 *
 * @template T
 * @param {Record<string, { value: T, error: string, focus: boolean }>} obj
 * @returns {Record<string, T>}
 */
export const objectFrom = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key].value;
    return acc;
  }, {});
};
