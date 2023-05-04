let clientesTrybeBank = ['Ada', 'John', 'Gus'];



function adicionaCliente(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente);
        return 'Cliente '  +cliente+ '(o) Adicionado com sucesso!'
    
    } else {
        return "O parâmetro passado deve ser do tripo 'string' "
    }

}
console.log(adicionaCliente('Josue'));
console.log(adicionaCliente('Josyell'));
console.log(adicionaCliente(27));