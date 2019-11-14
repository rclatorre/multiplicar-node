const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor base no es un numero');
            return;
        }

        if (!Number(limite)) {
            reject('El valor limite no es un numero');
            return;
        }
        console.log('======================'.green);
        console.log(`===Tabla de ${base} ==`.red);
        console.log('======================'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base * i}`);
        }

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor base no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('El valor limite no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}