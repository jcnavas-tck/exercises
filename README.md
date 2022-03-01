# Repositorio base para los ejercicios de Pablo Turrero

## Stack tecnológico
| |
|-|
| HTML5 |
  Vanilla JS (ES6) |

## Instalación y configuración
### Instalación
* Clona el proyecto mediante Git, usando una de las tres opciones siguientes:
 ```
HTTPS => https://github.com/jcnavas-tck/exercises.git
SSH => git@github.com:jcnavas-tck/exercises.git
GitHub CLI => gh repo clone jcnavas-tck/exercises
```
* Primero - instala las dependencias:
```
npm install
```
* Segundo - construye las imágenes:
```
npm run dev
```
* Por último - para levantar el proyecto, ejecuta sólo uno de los siguientes comandos:
```
npm start
npm run serve
````
Con esto, ya puedes acceder con el navegador a
```
http://localhost:8080/
````
### Dependencias instaladas:
|Tecnología|Nombre|
|-|-|
| *Transpilador de Javascript* | Babel-loader |
| *Transpilador de SASS* | CSS Loader |
| *Extractor de CSS* | MiniCssExtractPlugin |
| *Linter* | ESLint |