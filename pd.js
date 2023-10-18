var PorquinhoDigital = /** @class */ (function () {
    function PorquinhoDigital() {
        this.saldo = 0;
        this.objetivo = 0;
    }
    PorquinhoDigital.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    PorquinhoDigital.prototype.retirar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente para retirada.");
        }
    };
    PorquinhoDigital.prototype.definirObjetivo = function (valor) {
        this.objetivo = valor;
    };
    PorquinhoDigital.prototype.verificarProgresso = function () {
        var faltaParaObjetivo = this.objetivo - this.saldo;
        if (faltaParaObjetivo > 0) {
            console.log("Falta ".concat(faltaParaObjetivo, " para alcan\u00E7ar o objetivo."));
        }
        else if (faltaParaObjetivo === 0) {
            console.log("Parabéns! Você alcançou o objetivo.");
        }
        else {
            console.log("Voc\u00EA j\u00E1 ultrapassou o objetivo em ".concat(Math.abs(faltaParaObjetivo), "."));
        }
    };
    return PorquinhoDigital;
}());
var meuPorquinho = new PorquinhoDigital();
meuPorquinho.depositar(50);
meuPorquinho.definirObjetivo(100);
meuPorquinho.verificarProgresso();
meuPorquinho.retirar(30);
meuPorquinho.verificarProgresso();
meuPorquinho.depositar(30);
meuPorquinho.verificarProgresso();
