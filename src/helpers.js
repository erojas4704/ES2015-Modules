/**
 * Returns randomly selected choice from array.
 * @param {Array} items 
 * @returns 
 */
export function choice(items) {
    return items[Math.floor(Math.random(items.length))]
}

/**
 * Removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
 * @param {Array} items 
 * @param {Object} item
 * @return {Object} Item that was removed.
 */
export function remove(items, item) {
    let idx = items.indexOf(item);
    if (idx < 0) return;

    items.splice(idx, 1);
    return item;
}