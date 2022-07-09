class Display {
    constructor(displayValorAnterior, displayValorActual, background) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
        this.background = background;
    }
    
    borrar() {
        this.valorActual= this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

   borrarTodo() {
       this.valorActual ='';
       this.valorAnterior ='';
       this.tipoOperacion = undefined;
       this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
        

        if(this.valorActual === "01")
            return alert("Evangelion Unidad 01 Activada");

        if(this.valorActual === "02")
            return alert("Evangelion Unidad 02 Activada");

        if(this.valorActual === "00")
            return alert("Evangelion Unidad 00 Activada");

    }
                      
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }



}