export interface crearTarjetaI{
    pan?:string,
    nombre?:string,
    apellidoPaterno?:string,
    apellidoMaterno?:string,
    cedula?:string,
    telefono?:string,
    tipo?: TipoTarjeta,
    numValidacion?:number,
    codigo?:string,
    mensaje?:string
}

export enum TipoTarjeta {
    DEBITO = "DEBITO",
    CREDITO = "CREDITO"
}

export interface enrolarTarjetaI{
    pan?:string,
    numValidacion?:number,
    codigo?:string,
    mensaje?:string
}

export interface consultarTarjetaI{
    pan?:string,
    nombre?:string,
    apellidoPaterno?:string,
    apellidoMaterno?:string,
    cedula?:string,
    telefono?:string,
    estado?:{
        CREADA:'CREADA',
        ENROLADA:'ENROLADA',
    },
    codigo?:string,
    mensaje?:string
}

export interface eliminarTarjetaI{
    pan?:string,
    numValidacion?:number,
    panConfirm?:string,
    codigo?:string,
    mensaje?:string
}

export interface crearTransaccionI{
    pan?:string,
    direccionCompra?:string,
    totalCompra?:number,
    numReferencia?:number,
    estado?:{
        APROVADA:"APROVADA",
        RECHAZADA:"RECHAZADA",
        ANULADA:"ANULADA"
    },
    codigo?:string,
    mensaje?:string
}

export interface anularTransaccionI{
    pan?:string,
    totalCompra?:string,
    numReferencia?:string,
    codigo?:string,
    mensaje?:string
}