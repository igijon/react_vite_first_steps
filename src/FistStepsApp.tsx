import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Carro de la compra</h1>
            <ItemCounter name="Nintendo Switch 2"  quantity={10}/>
            <ItemCounter name="Pro Controller" quantity={3}/>
            <ItemCounter name="Super Smash" quantity={2}/>
        </>
    )
}