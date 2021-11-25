export function ingredientsFetchDataSuccess(ingredients) {
    return {
        type: "INGREDIENTS_FETCH_DATA_SUCCESS",
        ingredients
    }
}

export function ingredientsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((ingredients) => {
                dispatch(ingredientsFetchDataSuccess(ingredients.data));
            })
            .catch((err) => {
                console.log("Ошибка");
            });
    }
}

