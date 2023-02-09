// tady je místo pro náš program

let vstup = document.querySelector('.vystupProgramu');

vstup.innerHTML = prompt('Jméno:') + ' ' + prompt('Příjmení:') + ' ' + Number(2022 - Number(prompt('Rok narození:')));
vstup.style.color = prompt('Vaše oblíbená barva anglicky:');


