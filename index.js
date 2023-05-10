$(document).ready(function(){
    // jquery code

    // retrieve all recipes and store in inside a variable
    var recipeList = $('#recipe-list ul')

    // add event listeners to the sort buttons
    $('#sort-name-asc').click(function(){
        sortRecipes("name","asc");
    })
    $('#sort-name-desc').click(function(){
        sortRecipes("name","desc");
    })
    $('#sort-difficulty-asc').click(function(){
        sortRecipes("difficulty","asc");
    })
    $('#sort-difficulty-desc').click(function(){
        sortRecipes("difficulty","desc");
    })
    $('#sort-time-asc').click(function(){
        sortRecipes("time","asc")

    })
    $('#sort-time-desc').click(function(){
        sortRecipes("time","desc")
    })






    // implement our sorting functionality
    function sortRecipes(sortBy , sortOrder){
        var recipes = recipeList.children('li');

        // in this array we stored individual data values and sorted it
        var answer= [];
        // accessing data values
        // data method returns the value of the data attribute 
        for(var i = 0, l = recipes.length; i < l ; i++)
            answer.push($(recipes[i]).data(sortBy))

        // sorting those values
        answer.sort();
        
        // if sort order is descending then it will sort in descending order 
        if(sortOrder === 'desc') answer.reverse();

        // this list will contain list items
        var newRecipeList = []
        for(var i = 0 , l = answer.length; i < l ; i++){
            for(var j = 0 , l = recipes.length; j < l ; j++){
                if($(recipes[j]).data(sortBy) === answer[i]){
                    newRecipeList.push($(recipes[j]));
                }
            }
        }

        recipeList.empty()
        recipeList.append(newRecipeList);


    }
})