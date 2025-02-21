const experiencia = 1000;
const nome = "irineu"; // Definindo corretamente o nome como string

if (experiencia <= 1000) {
    console.log("ferro");
} else if (experiencia >= 2000 && experiencia <= 5000) {
    console.log("ouro");
} else if (experiencia >= 7001 && experiencia <= 7000) {
    console.log("Platina");
} else if (experiencia >= 8001 && experiencia <= 9000) {
    console.log("Ascendente");
} else if (experiencia >= 9001 && experiencia <= 10000) {
    console.log("Imortal");
} else if (experiencia >= 10000) {
    console.log("Radiante");
}

console.log(`O herói tem o nome ${nome} e está no nível ${experiencia}`);
