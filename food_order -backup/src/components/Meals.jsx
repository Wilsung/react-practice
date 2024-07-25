import Meal from "./Meal.jsx"

export default function Meals({ meals, isLoading, isFetching, loadingText, fallbackText }){
    return (
        <section>
            {isLoading && <h1>{loadingText}</h1>}
            {!isLoading && meals.length === 0 && <h1>{fallbackText}</h1>}
            {!isLoading && meals.length > 0 && (
                <ul id="meals">
                    {meals.map(meal => (
                        <li key={meal.id}>
                            <Meal {...meal}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}