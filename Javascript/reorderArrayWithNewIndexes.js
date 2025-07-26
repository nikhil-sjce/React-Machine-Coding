function sort(items, newOrder) {
  // // Step 1: Append index as suffix
  // for (let i = 0; i < items.length; i++) {
  //   items[i] = items[i] + newOrder[i]; // e.g., 'A1', 'B5'
  // }

  // // Step 2: Sort based on numeric suffix
  // items.sort((a, b) => {
  //   let aNumber = parseInt(a.slice(-1)); // get last digit (index)
  //   let bNumber = parseInt(b.slice(-1));
  //   return aNumber - bNumber;
  // });

  // // Step 3: Remove numeric suffix to restore original item
  // for (let i = 0; i < items.length; i++) {
  //   items[i] = items[i].slice(0, -1); // remove last char (index)
  // }
  // console.log(items)

  const copy = items.slice();
  for (let i = 0; i < items.length; i++) {
    items[newOrder[i]] = copy[i];
  }
}
