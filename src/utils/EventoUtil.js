import React from 'react'

export const obterTxtStatusEvento = (statusEvento) => {
    if (statusEvento === 'EM_VALIDACAO') {
        return 'Em validação'

    } else if (statusEvento === 'REJEITADO') {
        return 'Rejeitado, aguardando pendências'

    } else if (statusEvento === 'VALIDADO') {
        return 'Validado, em processamento'

    } else if (statusEvento === 'PAGO') {
        return 'Pago'

    } else if (statusEvento === 'PAGO_PARCIAL') {
        return 'Pago Parcial'

    } else if (statusEvento === 'GLOSA_TOTAL') {
        return 'Glosa Total'

    } else if (statusEvento === 'FATURADO') {
        return 'Faturado'

    } else if (statusEvento === 'PAGO_GLOSA_PARCIAL') {
        return 'Pago com glosa parcial'
    
    } else if (statusEvento === 'GLOSA_TOTAL_ACATADA') {
        return 'Glosa total acatada'

    } else if (statusEvento === 'CANCELADO') {
        return 'Cancelado, faltando pendências'

    } else if (statusEvento === 'DEVOLVIDO') {
        return 'Devolvido por solicitação do cliente'

    } else if (statusEvento === 'CRITICO') {
        return 'Prazo crítico'

    } else if (statusEvento === 'PERDIDO') {
        return 'Perdido, prazo esgotado'

    } else if (statusEvento === 'ENTREGUE_PAGADOR_INTERMEDIARIO') {
        return 'Entregue ao intermediário (Em análise)'

    } else if (statusEvento === 'ENTREGUE_PAGADOR_FINAL') {
        return 'Entregue ao pagador final (Em análise)'

    } else if (statusEvento === 'CANCELADO_PAGADOR') {
        return 'Cancelado no pagador'

    } 
}