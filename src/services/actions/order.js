export function postOrderSuccess(orderNumber) {
    return {
        type: "POST_ORDER_SUCCESS",
        orderNumber
    }
}

export function postOrder(url, ingredients) {
  
    return (dispatch) => {
        fetch(url, {
      method: 'POST',
      body: JSON.stringify({"ingredients": ingredients})
    })
      .then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(postOrderSuccess(data.order));
      })
      .catch((err) => {
        console.log(err)
      });
    }
}