const normalizeListingSingle = listing => ({
    ...listing,
    'isLiked': false,
    'isNew': listing.tags.includes('new')
});

export const normalizeListingsData = data => {
    return data.map(normalizeListingSingle);
};

export const httpGetAsync = (theUrl, callback) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
};


export const getNumOfItemsSelected = cart => Object.keys(cart).reduce((acc, itemIndex) => acc+cart[itemIndex], 0);

export const getSelectedItems = (cart, items) => {
  return Object.keys(cart).reduce((selectedItems, key) => {
      selectedItems.push({
          ...items[key],
          count: cart[key],
          id: key
      });
      return selectedItems;
  }, []);
};