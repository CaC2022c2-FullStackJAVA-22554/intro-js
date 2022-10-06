
let persona2 = {
    nombre: "María",
    age: 30,
    peso: 70,
    DNI: "12312344"
}

let persona = {
    nombre: "Alan",
    apellido: "Turing",
    edad: 40,
    colorDePelo: "Negro",
    estatura: 1.82,
    tieneHijos: false,
    auto: {
        marca: "Aston Martin",
        kms: 1500,
        motor: {
            nro: "2343242342534534556",
            tipo: "Nafta",
            cilindrada: 2.0
        }
    },
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
    },
    saludar: function(conEntusiasmo) {
        let saludo = `Hola, soy ${this.nombreCompleto()}`;
        if(conEntusiasmo) {
            saludo = saludo + "!!!";
        }
        console.log(saludo);
    }
}

console.log(persona.nombreCompleto());
persona.saludar(true);
persona.saludar(false);