import React from 'react'

export const formatDateTimeFromArray = (dateArray) => {
    if (!Array.isArray(dateArray)) {
        return ""
    }

    let ano = dateArray[0]
    let mes = dateArray[1] < 10 ? '0' + dateArray[1] : dateArray[1]
    let dia = dateArray[2] < 10 ? '0' + dateArray[2] : dateArray[2]

    let hora = dateArray[3] < 10 ? '0' + dateArray[3] : dateArray[3]
    let min = dateArray[4] < 10 ? '0' + dateArray[4] : dateArray[4]

    return ano + '-' + mes + '-' + dia + 'T' + hora + ':' + min
}

export const formatDateTimeFromMomentArray = (dateArray) => {
    if (!Array.isArray(dateArray)) {
        return ""
    }

    let ano = dateArray[0]
    let mes = dateArray[1] < 10 ? '0' + (dateArray[1] + 1) : (dateArray[1] + 1)
    let dia = dateArray[2] < 10 ? '0' + dateArray[2] : dateArray[2]

    let hora = dateArray[3] < 10 ? '0' + dateArray[3] : dateArray[3]
    let min = dateArray[4] < 10 ? '0' + dateArray[4] : dateArray[4]

    return ano + '-' + mes + '-' + dia + 'T' + hora + ':' + min
}

export const convertDateTimeFromArray = (dateArray) => {
    if (!Array.isArray(dateArray)) {
        return ""
    }

    let ano = dateArray[0]
    let mes = dateArray[1] < 10 ? '0' + dateArray[1] : dateArray[1]
    let dia = dateArray[2] < 10 ? '0' + dateArray[2] : dateArray[2]

    let hora = dateArray[3] < 10 ? '0' + dateArray[3] : dateArray[3]
    let min = dateArray[4] < 10 ? '0' + dateArray[4] : dateArray[4]

    return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min
}

export const convertDateToString = (date) => {
    if (!isValidDate(date)) {
        return ""
    }

    let ano = date.getFullYear()
    let mes = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    let dia = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

    let hora = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    return ano + '-' + mes + '-' + dia + 'T' + hora + ':' + min
}

export const convertDateToNormalString = (date) => {
    if (!isValidDate(date)) {
        return ""
    }

    let ano = date.getFullYear()
    let mes = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    let dia = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

    let hora = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min
}

export const convertDateArrayToNormalString = (dateArray) => {
    if (!Array.isArray(dateArray)) {
        return ""
    }

    let ano = dateArray[0]
    let mes = dateArray[1] < 10 ? '0' + dateArray[1] : dateArray[1]
    let dia = dateArray[2] < 10 ? '0' + dateArray[2] : dateArray[2]

    let hora = dateArray[3] < 10 ? '0' + dateArray[3] : dateArray[3]
    let min = dateArray[4] < 10 ? '0' + dateArray[4] : dateArray[4]

    return dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min
}
export const convertDateArrayToDate = dateArray => {
    if (!Array.isArray(dateArray)) {
        return null
    }

    let ano = dateArray[0]
    let mes = dateArray[1] < 10 ? '0' + dateArray[1] : dateArray[1]
    let dia = dateArray[2] < 10 ? '0' + dateArray[2] : dateArray[2]

    let hora = dateArray[3] < 10 ? '0' + dateArray[3] : dateArray[3]
    let min = dateArray[4] < 10 ? '0' + dateArray[4] : dateArray[4]

    return new Date(ano, mes - 1, dia, hora, min)
}
export const convertDateToCotacaoDolarApi = (date) => {
    if (!isValidDate(date)) {
        return ""
    }

    let ano = date.getFullYear()
    let mes = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    let dia = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

    return mes + '-' + dia + '-' + ano
}

export const verifyInputDate = value => {
    var dateRegex = /^\d{4}[./-]\d{2}[./-]\d{2}T\d{2}:\d{2}$/
    if (dateRegex.test(value)) {
        return true;
    }
    return false;
}

export const verifyDate = value => {
    var dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4} (?:[01]\d|2[0123]):(?:[012345]\d)$/
    if (dateRegex.test(value)) {
        return true;
    }
}

export const verifyEmail = value => {
    var regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if (regex.test(value)) {
        return true;
    }
    return false;
}

export const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
}

export const isInvalid = (value) => {
    return value === "" || value === "error"
}

export const notNullUndefined = (variable) => {
    if (variable !== null && variable !== undefined) {
        return variable
    } else {
        return ""
    }
}

export const formatCpf = (value) => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const formatTelefone = (value) => {
    let x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);

    if (value.length > 14) {
        x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    }

    return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
}

export const formatCep = (value) => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{5})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1') // captura 3 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const mascara = (length, mask) => {
    var saida = mask.substring(1, 0);
    var texto = mask.substring(length);
    if (texto.substring(0, 1) !== saida) {
        return texto.substring(0, 1);
    }
}

export const obterNomeReduzido = (str, maxLength) => {
    return str.length <= maxLength ? str : str.substring(0, maxLength) + '...'
}

export const imgExtensions = [
    "apng", "bmp", "gif", "ico", "cur", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "png", "svg", "tif", "tiff", "webp"
]

export const audioExtensions = [
    "mp3", "wma", "ogg", "aac", "wav", "aiff", "pcm", "flac"
]

export const getNull = (str) => {
    return str ? str : null
}

export const getTagI = (obj) => {
    return obj ? obj : <i>-</i>
}

export const onlyNumbers = (value) => {
    return /[0-9]/.test(value) || value === ''
}
export const removeFromArray = (arr, item) => {
    let newArr = [...arr]
    newArr.splice(newArr.findIndex(obj => obj === item), 1)

    return newArr;
}

export const obterStringMes = (mes) => {
    if (mes === 1) {
        return "Janeiro";
    } else if (mes === 2) {
        return "Fevereiro";
    } else if (mes === 3) {
        return "Março";
    } else if (mes === 4) {
        return "Abril";
    } else if (mes === 5) {
        return "Maio";
    } else if (mes === 6) {
        return "Junho";
    } else if (mes === 7) {
        return "Julho";
    } else if (mes === 8) {
        return "Agosto";
    } else if (mes === 9) {
        return "Setembro";
    } else if (mes === 10) {
        return "Outubro";
    } else if (mes === 11) {
        return "Novembro";
    } else if (mes === 12) {
        return "Dezembro";
    }

    return "";
}

export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});