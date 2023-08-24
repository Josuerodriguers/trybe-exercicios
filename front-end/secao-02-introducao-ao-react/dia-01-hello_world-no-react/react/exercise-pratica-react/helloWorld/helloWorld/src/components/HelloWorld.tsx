import ModuleDetails from './ModuleDetails';
import Title from './Title';
import calculateAge from './util/age';

    const HelloWorld = () => {
        const name = 'Josué Azevedo';
        const birth = '30/03/1999';
        const age = calculateAge(birth);
        return (
            <div>
                <Title />
                <ModuleDetails />
                <h1>{`Estudante: ${name}`}</h1>
                <p>{`Idade: ${age}`}</p>
            </div>
        );
  }
  
    export default HelloWorld;