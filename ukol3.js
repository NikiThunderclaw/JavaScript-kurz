let jmeno = prompt('Jméno');

let vek = Number(prompt('Kolik ti je let?'));

if (vek < 18) {
  console.log(
    'Vaše jméno je' + jmeno + 'je Vám' + vek + 'a tak musíte počkat ještě'
  );
}

if (vek > 18) {
  console.log(
    'Vaše jméno je' + jmeno + 'je Vám' + vek + 'a tak máte právo řídit auto'
  );
}
