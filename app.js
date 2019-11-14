const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

// requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('comando desconocido');
}



// console.log(process); //objeto disponible
// console.log(process.argv); //argumentos
/*
node app --base=5 a b c d e

[ 'C:\\Program Files (x86)\\nodejs\\node.exe',
  'Z:\\udemy\\node\\03-bases\\app',
  '--base=5',
  'a',
  'b',
  'c',
  'd',
  'e' ]

*/

//codigo


let argv2 = process.argv;




// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];