# meli-fe-test

#Correr el backend

cd backend
npm install (1 ra vez)
npm run dev

Por defecto corre en el localhost con puerto 3001

en caso de cambiarse, podra especificarse la nueva url en el archivo https://github.com/nicocda/meli-fe-test/blob/main/frontend/src/config.ts
en la constante backendUrl


#Correr front end

cd frontend
npm install (1ra vez)
npm start

Por defecto corre en localhsot con puerto 3000
en caso de utilizar otro host, modificar el archivo https://github.com/nicocda/meli-fe-test/blob/main/backend/src/config/config.cors.ts
en la propiedad origin



#Uso basico
Especificar el articulo deseado en la barra de busqueda superior y presionar enter (o click en el boton de busqueda) para inicar la busqueda,
el sistema le mostrara los primeros 4 elementos que coincidan con la busqueda, si quiere mayor detalle de un elemento puedo acceder al mismo tocando la imagen, precio o descripcion del producto, en ese momento accedera a la vista detallada del producto, la funcionalidad de compra no esta implementada

En caso de no haber articulos que coincidan con la busqueda o que exista algun error al momento de realizar la busqueda el sistema notificara el mismo con un cartel informativo

Si intenta acceder a una pagina que existe, el sistema mostrará un aviso y le permitira volver a la pagina inicial
