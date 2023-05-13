"use strict";
// tipos de dados (aula 2 seção 6 do curso de lógica de programação com typescript da hcode treinamentos)
// string = texto, aspas duplas ou simples, ascento grave(template string)
let nameUser = "João";
let lastName = 'Rangel';
let fullName = `meu nome é ${nameUser} ${lastName}`;
// console.log(fullName.toLowerCase());
// number = inteiros, decimais, hexadecimais, binários
let age = 33;
// boolean = verdadeiro ou falso (true or false)
let isLogged = true;
// array = variáveis indexidas, vetores, matrizes (muito usado em listas e índices)
let languages = ['PHP', 'Java', 'C#', 'Python', 'JavaScript'];
let languages2 = ['PHP', 'Java', 'C#', 'Python', 'JavaScript', 10];
let languages3 = ['PHP', 'Java', 'C#', 'Python', 'JavaScript'];
let years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
let company = {
    name: 'Hcode',
    address: 'Avenida José Versolato, 101',
    city: 'São Bernando do Campo',
    state: 'SP',
};
// date = data, hora, dia, mês, ano => yyyy-mm-dd hh:mm:ss => timestamp -> quantidade de segundos a partir de 01 de janeiro de 1970 (Padrão Unix)
let bornDate = new Date('2023-05-12');
// tuple =  array com tipos de dados definidos
let address = ['Av. Paulista', 1000];
// enum = lista de valores possíveis. ['bloqueado', 'liberado', 'pendente']
var statusUserEnum;
(function (statusUserEnum) {
    statusUserEnum[statusUserEnum["blocked"] = 0] = "blocked";
    statusUserEnum[statusUserEnum["released"] = 1] = "released";
    statusUserEnum[statusUserEnum["pending"] = 2] = "pending";
})(statusUserEnum || (statusUserEnum = {}));
let statusUser = statusUserEnum.pending;
// any = qualquer tipo de dado. não recomendado
let obs = 'qualquer coisa';
// ---------------------------------------------------------------
// variáveis de memória (aula 3 seção 6 do curso de lógica de programação com typescript da hcode treinamentos)
let variavelMutavel = 'Esta variável pode ser alterada';
variavelMutavel = 'Agora o valor é outro';
// console.log(variavelMutavel.toLowerCase());
const variavelImutavel = 'Esta variável não pode ser alterada';
// erro ==> variavelImutavel = 'Agora o valor é outro';
// console.log(variavelImutavel.toLowerCase());
// ---------------------------------------------------------------
// variável indexada ou vetor (aula 4 seção 6 do curso de lógica de programação com typescript da hcode treinamentos)
let bmw = ['320i', 'M3', 'M4', 'M5', 'X1', 'X3', 'X4', 'X5', 'X6', 'Z4'];
// console.log(bmw[0]);
// console.log(bmw.length);
// console.log(bmw.at(-1));
// ---------------------------------------------------------------
// vetor de vetores ou matriz (aula 5 seção 6 do curso de lógica de programação com typescript da hcode treinamentos)
let montadoras = [
    ["BMW", "320i", "M3", "M4", "M5", "X1", "X3", "X4", "X5", "X6", "Z4"],
    ["Audi", "A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7"],
    ["Mercedes", "GLE", "GLA", "GLC", "CLA", "CLS", "AMG GT", "SL", "SLK", "SLR", "SLS"],
    ["Ferrari", "458", "488", "F12", "F8", "FF", "GTC4", "Portofino", "Monza", "Roma", "SF90", "Stradale"],
    ["Lamborghini", "Aventador", "Huracan", "Urus", "Gallardo", "Murcielago", "Sian", "Veneno", "Reventon", "Diablo", "Countach", "Miura"],
    ["Porsche", "911", "718", "Panamera", "Cayenne", "Cayman", "Macan", "Taycan", "Boxster", "Carrera GT", "Carrera GT", "Spyder"],
];
// console.log(montadoras[4][0]);
montadoras.forEach((m, index) => {
    // console.log(montadoras[index][0]);
    let carros = "";
    m.forEach((modelo, index) => {
        if (index > 0) {
            carros += modelo + ', ';
        }
    });
    // console.log(carros.split(", ").slice(0, -1).join(" - "));
    // console.log(   '-------------------'   );
});
//  ^
//  | trabalhando com índices dentro de índices percorrendo um após o outro
// ---------------------------------------------------------------
// hcode challenge (aula 6 e 7 seção 6 do curso de lógica de programação com typescript da hcode treinamentos)
const airCompanies = ["Gol", "Azul", "Latam", "Avianca", "Delta", "Emirates", "Qatar Airways", "American AA"];
airCompanies.forEach((company, index) => {
    console.log(`${index + 1} - ${company} \n -------------------`);
});
// listando as empresas aéreas e passando o índice de cada uma
// created by ceo at hcode "glaucio daniel" and edited by "gr" with gh copilot 
