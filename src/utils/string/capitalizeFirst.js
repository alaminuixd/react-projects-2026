/**
 * Capitalizes the first letter of a string or each string in an array.
 *
 * This utility safely handles invalid values by returning an empty string
 * for non-string inputs or empty strings.
 *
 * @function capitalizeFirst
 * @param {string | string[]} item - A string or an array of strings to capitalize.
 *
 * @returns {string | string[]}
 * - Returns a capitalized string if the input is a string.
 * - Returns an array of capitalized strings if the input is an array.
 *
 * @example
 * // Single string
 * capitalizeFirst("electronics");
 * // "Electronics"
 *
 * @example
 * // Array of strings
 * capitalizeFirst(["electronics", "mobile", "accessories"]);
 * // ["Electronics", "Mobile", "Accessories"]
 *
 * @example
 * // Invalid values
 * capitalizeFirst(null);
 * // ""
 *
 * @example
 * // React usage
 * <p>Categories: {capitalizeFirst(product.category).join(", ")}</p>
 */
export const capitalizeFirst = (item) => {
  const capitalize = (str) => {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.slice(1);
  };

  if (Array.isArray(item)) {
    return item.map(capitalize);
  }

  return capitalize(item);
};
