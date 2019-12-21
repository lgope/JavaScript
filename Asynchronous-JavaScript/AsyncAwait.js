// In ES6 to consume promises syntax can still be quite confusing and difficult to manage.And, so in ES8, or ES2017, something alled Async/Await was introduced to the JavaScript language.

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

            resolve(`${pub}: ${recipe.title}`);

        }, 1500, Publisher);
    });
};

/* 
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
    }); */


// it's good to remember that async function always returns a promise.
async function getRecipeAW() {
    const IDs = await getIDs;
    console.log(IDs); // [ 523, 883, 432, 974 ]

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe); // 432: Fresh tomato Pasta

    const related = await getRelated('Lakshman Gope');
    console.log(related); // Lakshman Gope: American Pizza

    return recipe;
}

getRecipeAW().then(result => console.log(`${result} is the best ever!`)); // 432: Fresh tomato Pasta is the best ever!