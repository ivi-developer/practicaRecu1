# IalonardiIvan

Dos errores que prevenian la renderizacion del componente PilotoForm, Validators.arguments y el control cantPodios tenia sus dos validadores sincronos separados por comas, convirtiendo al segundo en un validador asincrono lo que genera un error por no retornar una promesa. 

De la maquetacion ni hablemos.
En el recu no quiero volver a ver un solo parcial que le de al usuario la responsabilidad de asignar un id.

Bien el servicio. Los atributos inyectados, asi como la url *deben* ser privados. Escribir <return this.http.delete<null>(`${this.urlBase}/${id}`)> no es suficiente para que HttpClient retorne Observable<null>, para cambiar el tipo de retorno del *metodo del servicio* hay ejemplos en resoluciones de tps usando pipe().

A la ruta de detalles le falta hacer uso de un parametro. Falta la ruta de edicion.

Al formulario le hace falta que las enumeraciones sean desplegables, de esa manera no tener que hacer validaciones extra.

Cuando los metodos estan tipados, por ejemplo PilotoService.get() ya retorna un Observable<Piloto[]> no es necesario tipar lo recibido en next porque ya se sabe que es un array de pilotos.
La tarjeta del piloto no es la responsable de eliminar al piloto. La tarjeta no conoce su contexto, sí es cierto que tiene la información para hacerlo, pero es responsabilidad de quien conoce a todos los pilotos, o sea la lista.

Al componente de detalles le hace falta inspeccionar la ruta en busca del id, que tambien debe estar configurado en el archivo de rutas.

Con esa información, la vista de edición es sólo repetir código.