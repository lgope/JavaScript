// From Callback Hell to Promises (ES6)

/* Promises, which is an ES six feature designed specifically
to deal with asynchronous JavaScript. In simple terms a promise is an object
that keeps track about whether a certain event
has happened already or not, and if it did happen,
then the promise determines what happens next. A promise kind of implements the concept
of a future value that we're expecting.*/

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {

            const recipe = {
                title: 'Fresh tomato Pasta',
                Publisher: 'Lakshman'
            };

            resolve(`${ID}: ${recipe.title}`);

        }, 1500, recID);
    });
};

const getRelated = Publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'American Pizza',
                Publisher: pub
            };

            resolve(`${pub}: ${recipe.title}`); // 3

        }, 1500, Publisher);
    });
};


// this then method allows us to add an event handler for the case that the promise is fulfilled. So which means that there is a result.
getIDs
    .then(IDs => { // so this argument here will be the result of the successful promise.
        console.log(IDs); // [ 523, 883, 432, 974 ]
        return getRecipe(IDs[2]);
    })

    .then(recipe => {
        console.log(recipe); // 432: Fresh tomato Pasta
        return getRelated('Lakshman Gope');
    })

    .then(recipe => {
        console.log(recipe); // Lakshman Gope: American Pizza

    })
    // if the promise rejected then catch method will catch the error.
    .catch(error => {
        console.log('Error: ' + error);
    });