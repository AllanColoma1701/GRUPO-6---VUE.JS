const app = Vue.createApp({
    data (){
        return{
            producto: 'Medias', 
            marca: 'Vue Mastery',
            detalles:['50% Algodón', '30% Lana', '20% Poliéster'], 
            variantes: [
                {id: 2234, color: 'green', imagen: './images/medias_verdes.jpg', cantidad: 50}, 
                {id: 2235, color: 'blue', imagen:'./images/medias_azules.jpg', cantidad: 0}
                       ], 
            carrito: 0, 
            varianteSeleccionada: 0,



        }    
    }, 
    methods: {
        añadirCarrito() {
            this.carrito += 1
        }, 
        actualizarVariante(index) {
            this.varianteSeleccionada = index
        }
    }, 

    computed: {
        titulo() {
            return this.producto + '' + this.marca
        }, 
        imagen() {
            return this.variantes[this.varianteSeleccionada].imagen
        }, 
        enStock() {
            return this.variantes[this.varianteSeleccionada].cantidad
        }

    }

})

