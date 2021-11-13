import IngredientDetailsStyle from './IngredientDetails.module.css';

function IngredientDetails(props) {
    return(
        <div>
            <div className={IngredientDetailsStyle.img__wrap}>
                <img className={IngredientDetailsStyle.img} src={props.ingredient.image}/>
            </div>            
            <p className={`text text_type_main-medium ${IngredientDetailsStyle.title}`}>{props.ingredient.name}</p>
            <div className={IngredientDetailsStyle.descr}>
                <div className={`text text_type_main-small ${IngredientDetailsStyle.item}`}>
                    <span className={IngredientDetailsStyle.subtitle}>Калории,ккал</span>
                    <span className="text text_type_digits-default">{props.ingredient.calories}</span>
                </div>
                <div className={`text text_type_main-small ${IngredientDetailsStyle.item}`}>
                    <span className={IngredientDetailsStyle.subtitle}>Белки, г</span>
                    <span className="text text_type_digits-default">{props.ingredient.proteins}</span>
                </div>
                <div className={`text text_type_main-small ${IngredientDetailsStyle.item}`}>
                    <span className={IngredientDetailsStyle.subtitle}>Жиры, г</span>
                    <span className="text text_type_digits-default">{props.ingredient.fat}</span>
                </div>
                <div className={`text text_type_main-small ${IngredientDetailsStyle.item}`}>
                    <span className={IngredientDetailsStyle.subtitle}>Углеводы, г</span>
                    <span className="text text_type_digits-default">{props.ingredient.carbohydrates}</span>
                </div>
            </div>
        </div>

    )
} 

export default IngredientDetails;