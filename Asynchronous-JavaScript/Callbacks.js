// The Old Way: Asynchronous JavaScript with Callbacks

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID); // 1

        setTimeout(id => {
            const recipe = {
                title: 'Fresh tomato Pasta',
                Publisher: 'Lakshman'
            };
            console.log(`${id}: ${recipe.title}`); // 2

            setTimeout(Publisher => {
                const recipe2 = {
                    title: 'American Pizza',
                    Publisher: Publisher
                };

                console.log(recipe2); // 3

            }, 1500, recipe.Publisher);

        }, 1500, recipeID[2]);



    }, 1500);
}

getRecipe();