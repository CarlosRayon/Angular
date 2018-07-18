export class Empleado {
    /*Forma Clásica
    
    public nombre:string;
    public edad:number;
    
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    */



    /* ------------------------------------ */
    /* Forma de Angular/TypeScript */
    /*Definimos las propiedades en los parámetros directamente*/
    /* ------------------------------------ */
    constructor(
        public nombre: string,
        public edad: number,
        public cargo: string,
        public contratado: boolean
    ) { }




}