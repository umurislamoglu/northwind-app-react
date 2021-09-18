const categories = []

const categoryReducer = (state =categories,actions ) => {

    switch(actions.type){

        case "SET_CATEGORIES":
            return actions.categories;

        case "ADD_CATEGORY":
            return [
                ...categories,
                actions.newCategory
            ]

        case "REMOVE_CATEGORY":
            return categories.filter(({ id }) => id !== actions.id)

        case "EDIT_CATEGORY":
            return state.map((category)=>{
              if(category.id === actions.id) {
                return{...category,
                  ...actions}
              } else {
                return category;
              }
            })


        default: 
            return state;
    }
}

export default categoryReducer;