1. Inicio de proyecto - GifExpertApp
  - Vamos a
      https://developers.giphy.com/dashboard/
  - Create an App > Select API > Next Step > Llenamos y marcamos el check > Create App > Obtenemos la API Key



2. useState   <--   Hook
   const [initialState, setinItialState] = useState(initialState)

      - initialState: Estado inicial
      - setinItialState(): Function q modifica el  initialState
        - Recibe Un Data Type o Expression q Retorne algun Value
          - Reemplazara el initialState



3. Clases CSS en React
  - Como  class  es una kw de JS, decidieron ponerle   className


4. Custom Hooks
  - Extraer logica para poder reutilizarla




5. Servidor opcional
  - http-server
      - Monta rapido un server



6. Desplegar App de React en Github Pages:
  - Colocar   .   en las rutas del   asset-manifest.js   q se genera en el build de produccion
  - Si auna si no funciona, colocar   .   en cada  href  a archivos internos de la app en el HTML

  npm install gh-pages — save-dev