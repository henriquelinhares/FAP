const banco = { conta: 123456, saldo: 1000, tipoConta: "corrente",

buscarSaldo: function() { return this.saldo; },

deposito: function(valor) { this.saldo += valor; },

saque: function(valor) { this.saldo -= valor; },

numeroConta: function() { return this.conta; } };

console.log("Saldo atual:", banco.buscarSaldo()); banco.deposito(500); console.log("Saldo após depósito:", banco.buscarSaldo()); banco.saque(200); console.log("Saldo após saque:", banco.buscarSaldo()); console.log("Número da conta:", banco.numeroConta());