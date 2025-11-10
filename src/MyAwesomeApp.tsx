// Las variables si no se modifican pueden estar fuera del componente y es más eficiente porque el código dentro del 
// componente se ejecuta constantemente.
const firstName = 'Inma';
const lastName = 'Gijón';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá'
};
export const MyAwesomeApp = () => {

    return(
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <p>{2+2}</p>
            {/* Un boolean no tiene representación por sí mismo en React */}
            <h1>{isActive ? 'Activo': 'No activo'}</h1>
            {/* Los objetos no son un tipo permitido en React como hijo.  Con los arrays no pasa*/}
            <h1>{JSON.stringify(address)}</h1>
        </>
    );
};