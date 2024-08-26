function main(input) {
  let s = input.trim();

  var data = {
    'tourist': '3858',
    'ksun48': '3679',
    'Benq': '3658',
    'Um_nik': '3648',
    'apiad': '3638',
    'Stonefeang': '3630',
    'ecnerwala': '3613',
    'mnbvmar': '3555',
    'newbiedmy': '3516',
    'semiexp': '3481'
  };

  console.log( data[s] );
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
