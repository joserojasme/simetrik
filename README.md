# simetrik

simetrik tiene seguridad con un login que se valida contra un grupo de usuarios de AWS cognito, por favor inicie sesión con el usuario: JOSEROJASME y contraseña: JOSE1234

En el proyecto se trabajó con componentes de clase, función y hooks.

simetrik permite a los usuarios consultar información de conciliaciones, fuentes, tableros y usuarios... Realizar filtro por medio de un input de busqueda, de balance y de fecha que filtra por diferentes campos de los arrays de datos.

disponible en: http://simetrik.s3-website.us-east-2.amazonaws.com/home

## Getting Started

1. Ejecute npm install
2. Ejecute npm start
3. Inicie sesión con usuario JOSEROJASME Y contraseña JOSE1234

## Built With

- [ReactJS](https://es.reactjs.org/) - La librearía JS Utilizada
- [ReactRouter](https://reacttraining.com/react-router/web/guides/quick-start) - Ruteo de la aplicación
- [Redux](https://react-redux.js.org/) Manejo de estado global
- [CognitoAWS](https://aws.amazon.com/es/cognito/) Seguridad
- [ESlint](https://eslint.org/) y prettier Análisis y estructura de código
- [Npm](www.npmjs.com) Gestión de dependencias
- [BabelJS](babeljs.io) transpilador
- [WebPack](https://webpack.js.org/) Empaquetador de módulos
- [Axios](https://www.npmjs.com/package/axios) Peticiones

### Prerequisites

Node js

# Cuestionario

### 1. ¿Por qué no debería usar la librería JQuery , si estoy usando ReactJS ?

Podemos encontrar ventajas de ReactJS sobre JQuery según desde donde lo veamos:

Tecnicamente podemos encontrar que React nos ofrece ventajas como el virtual DOM que permite mejorar el rendimiento de la aplicación al hacer render especificamente en el nodo donde sus datos cambiaron. Al estar las vistas asociadas a los datos no es necesario escribir funcionalidades que tengan como objetivo refrescar las vistas cuando los datos cambien. React es una libreria que nos permite tener una arquitectura mantenible basada en componentes y con buen performance.

Si lo miramos desde la necesidad de una compañia para encontrar personal capacitado, entonces react tambien nos ofrece una ventaja, pues sabemos que el desarrollo es algo que evoluciona cada dia en sus tecnologias y react según encuestas oficiales de javascript es la libreria mas usada y con mayor proyección de uso en grandes proyectos.

### 2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component ?

Hace casi 2 años atrás nos veiamos obligados a usar componentes de clase cuando teniamos que usar un estado local en la aplicación o ciclos de vida, ahora con hooks podemos usar estas caracteristicas en componentes de función. Entonces basado en que ahora los componentes de clase no me ofrecen caracteristicas adicionales, usuaria componentes de funcion y hooks porque al Babel transcompilar es mucho menor el codigo de un componente de funcion que uno de clase lo que se traduce en rendimiento. Adicional los equipos de desarrollo pueden tener menos problemas al entender bien el scope de la aplicación, cosa que con el this, se enredaban.

### 3. ¿Que es un archivo JSX ?

No sabria explicar con mis palabras esta pregunta.

### 4. ¿Que diferencia hay entre una function y una arrow function de Javascript?

Por un lado es el sugar sintax, la manera que puedes escribir una funcion que recibe un parametro, que solo retorna algo o que simplemente es anomina, la hacen diferentes a una función normal. Por ejemplo la funcion

function random(valorMaximo){
return Math.floor(Math.random() \* (valorMaximo-1) + 1);
}

seria igual escrita asi:

const random = valorMaximo => Math.floor(Math.random() \* (valorMaximo-1) + 1);

Por otro lado las arrow function son siempre son tratadas como funciones anominas y tienen un objeto contexto global (window)

### 5. ¿Qué es Redux y cómo nos ayuda en los proyectos?

Es una de las muchas librerias javascript usadas actualmente y esta especificamente nos ayuda a manejar el estado global de la aplicacion, adicional que con redux thunks podemos tener actions asincronas para cambiar datos del reducer por ende el estado de la aplicacion.

### 6. ¿Por qué usuarios pruebas unitarias en tu código?

Porque nos ayudan a encontrar errores sea en logica, sea en componentes antes de por ejemplo de hacer pasos de ambiente. Nos sirven para documentar, a tener mejor calidad y legibilidad de codigo.

### 7. ¿Que nos permite hacer la siguiente declaración?

const anyFunction = ( param_1 ) => ( param_2 ) => param_1 + param_2

Esto es un clousure y al ejecutar por ejemplo console.log(anyFunction(1)(5)) en la consola se pintaria la suma entre 1 y 5
Esto es gracias a que clousure es una funcion que devuelve otra funcion y que recuerda el primer parametro con el que fue ejecutado
