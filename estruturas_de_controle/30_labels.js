const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

externo:
for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 3) break externo // direcionou o break para o for externo. 
        console.log(`Par = ${a},${b}`)
    }
}

/* Não é aconselhável fazer esse tipo de estrutura por questão de organização e 
manutenibilidade, o ideal é que quebre isso em pequenas funções com pequenas 
responsabilidades. Existem formas mais interessantes e alto nível de se chegar nesse resultado. */