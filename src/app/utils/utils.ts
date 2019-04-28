import { HttpParams } from "@angular/common/http";

export class Utils {

    static montarParametros(filtro) {
        let params = new HttpParams();
        if (Object.values(filtro).length > 0) {
            for (let key in filtro) {
                if (typeof filtro[key] === 'object') {
                    if (key != "constructor" && filtro[key] !== undefined && filtro[key] !== null) {
                        params = params.set(key, filtro[key]);
                    }
                } else {
                    if (key != "constructor") {
                        if (!Utils.isNullOrEmpty(filtro[key]) && filtro[key] != "undefined") {
                            params = params.append(key, Utils.removerCarateresEsp(filtro[key]));
                        }
                    }
                }
            }
        }
        return params
    }

    static isNullOrEmpty(valor): boolean {
        if (valor == null || String(valor).trim() == "" || valor == undefined) {
            return true;
        }
        return false;
    }

    // Remove ponto, virgula e traço
    static removerCarateresEsp(valor) {
        if (valor === 0) return valor;
        if (!valor) {
            return;
        }
        if (typeof valor == 'number') {
            return valor;
        }
        return valor.replace(/[.,-]/g, "");
    }

    static somenteNumeros(valor): String {
        return valor.replace(/[^\d]+/g, '');
    }

    static isNull(valor): boolean {
        return valor !== undefined && valor !== null;
    }

    static removerCaracteresEspeciais(modelo): any {
        for(let key in modelo) {
            if (typeof modelo[key] === 'object') {
                if(modelo[key] instanceof Array) {
                    for(let array of modelo[key]) {
                        for(let a in array) {
                            modelo[key][array][a] = Utils.somenteNumeros(modelo[key][array][a].toString());
                        }
                    }
                } else {
                    for(let obj in  modelo[key]) {
                        modelo[key][obj] = Utils.somenteNumeros(modelo[key][obj].toString());
                    }
                }
            } else {
                modelo[key] = Utils.somenteNumeros(modelo[key].toString());
            }
        }
    }
}