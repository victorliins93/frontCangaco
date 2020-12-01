import axios from 'axios';

const server = 'http://localhost:5000';

export const login = (user) => {
  return axios.post(server + '/', user, );
};

export const postRecuperarSenha = (email) => {
  return axios.post(server + '/api/recuperar-senha', null, {
    params: {
      email: email
    }
  });
}

export const getBoletinsDesatualizados = (idsExternos) => {
  return axios.get(server + '/api/idExterno', {
    params: { idsExternos: idsExternos + '' }
  });
}

export const postCodigoConfirmacao = (codigo) => {
  return axios.post(server + '/api/recuperar-senha/codigo', null, {
    params: {
      codigo: codigo
    }
  });
}
export const postNovaSenha = (params) => {
  return axios.put(server + '/api/recuperar-senha/redefinir', null, {
    params: params
  });
}

export const getUsuarioLogado = () => {
  return axios.get(server + '/api/me')
}

export const refreshToken = () => {
  return axios.get(server + '/refresh');
}

export const obterEnderecoDoCep = cep => {
  return axios.get('https://viacep.com.br/ws/' + cep + '/json/');
}

export const obterCotacaoDolar = (dataInicial, dataFinal) => {
  // as datas devem estar no formato mes/dia/ano (ex.: 11-16-2020)
  // esta api não retorna dados das datas que caem nos sábados e domingos
  return axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?`+
                    `@dataInicial='${dataInicial}'&` + 
                    `@dataFinalCotacao='${dataFinal}'&` + 
                    `$top=100&` + 
                    `$format=json`);
}

/* API de Médicos */
export const getMedicos = (habilitado) => {
  return axios.get(server + '/api/medico', {
    params: {
      habilitado
    }
  });
}
export const postMedico = (medico) => {
  return axios.post(server + '/api/medico', medico);
}
export const putMedico = (medico) => {
  return axios.put(server + '/api/medico', medico);
}
export const deleteMedico = (id) => {
  return axios.delete(server + '/api/medico/' + id);
}

/* API de Produção */
export const getProducoes = (params) => {
  return axios.get(server + '/api/producao', {
    params: params
  });
}
export const getProducao = (id) => {
  return axios.get(server + '/api/producao/' + id);
}
export const postProducao = (producao) => {
  return axios.post(server + '/api/producao', producao);
}
export const putProducao = (producao) => {
  return axios.put(server + '/api/producao', producao);
}
export const deleteProducao = (id) => {
  return axios.delete(server + '/api/producao/' + id);
}
export const getQuantidadeEventos = (id) => {
  return axios.get(server + '/api/producao/' + id + '/eventos/count');
}

/* API de Funcionário */
export const getFuncionarios = (habilitado) => {
  return axios.get(server + '/api/funcionario', {
    params: {
      habilitado
    }
  });
}
export const getFuncionario = (id) => {
  return axios.get(server + '/api/funcionario/' + id);
}

/* API de Evento */
export const getEventos = (params) => {
  return axios.get(server + '/api/evento', {
    params: params
  });
}
export const getEventosPorIdExterno = (idsExternos) => {
  return axios.get(server + `/api/evento/idexterno`, {
    params: { idsExternos: idsExternos + '' }
  });
}
export const getEventosByIdArvore = (params) => {
  return axios.get(server + '/api/evento/idarvore', {
    params: params
  });
}
export const postEvento = (evento) => {
  return axios.post(server + '/api/evento', evento)
}
export const putEvento = (evento) => {
  return axios.put(server + '/api/evento', evento);
}
export const getProcedimentosPorEvento = (idEvento) => {
  return axios.get(server + `/api/evento/${idEvento}/procedimentos`)
}

export const postArquivosEvento = async (idEvento, anexos) => {
  return await axios.post(server + `/api/evento/${idEvento}/categoria/upload`, anexos)
}
export const putArquivosEvento = (idEvento, anexos) => {
  return axios.put(server + `/api/evento/${idEvento}/categoria/update`, anexos)
}

export const postRegistrosInteracoesReembolsoEvento = async (idEvento, registros) => {
  return await axios.post(server + `/api/evento/${idEvento}/reembolso/registro-interacao/upload`, registros)
}
export const putRegistrosInteracoesReembolsoEvento = (idEvento, anexos) => {
  return axios.put(server + `/api/evento/${idEvento}/reembolso/registro-interacao/update`, anexos)
}

export const deleteEvento = (id) => {
  return axios.delete(server + '/api/evento/' + id);
}
export const getQRCodes = (qtd) => {
  return axios.get(server + '/api/qrcode/pdf/gerar/' + qtd)
}
export const putProcedimentosEvento = (procedimentos) => {
  return axios.put(server + '/api/evento/procedimentos', procedimentos);
}

/* API de Tipo de Evento */
export const getTiposEvento = (habilitado) => {
  return axios.get(server + '/api/evento/tipo', {
    params: {
      habilitado
    }
  });
}

/* API de Local de Evento */
export const getLocaisEvento = (habilitado) => {
  return axios.get(server + '/api/evento/local', {
    params: {
      habilitado
    }
  });
}

/* API de Clínicas */
export const getClinicas = (habilitado) => {
  return axios.get(server + '/api/clinica', {
    params: {
      habilitado
    }
  });
}

/* API de Intermediário */
export const getPagadoresIntermediarios = (habilitado) => {
  return axios.get(server + '/api/pagador/intermediario', {
    params: {
      habilitado
    }
  });
}

/* API de Pagador Final */
export const getPagadoresFinais = (habilitado) => {
  return axios.get(server + '/api/pagador/final', {
    params: {
      habilitado
    }
  });
}

/* API de Convênio */
export const getConvenios = (habilitado) => {
  return axios.get(server + '/api/convenio', {
    params: {
      habilitado
    }
  });
}

/* API de Pagamento */
export const getPagamentos = (habilitado) => {
  return axios.get(server + '/api/pagamento', {
    params: {
      habilitado
    }
  });
}
export const postArquivosPagamento = (arquivos) => {
  return axios.post(server + '/api/import/coopanest-recife', arquivos)
}

/* API de Acomodação */
export const getAcomodacoes = (habilitado) => {
  return axios.get(server + '/api/acomodacao', {
    params: {
      habilitado
    }
  });
}

/* API de Procedimentos */
export const getProcedimentos = (params) => {
  return axios.get(server + '/api/procedimento', {
    params: params
  })
}

/* API de Agendamentos */
export const getAgendamentos = (params) => {
  return axios.get(server + '/api/agendamento', {
    params: params
  });
}
export const getAgendamento = (id) => {
  return axios.get(server + '/api/agendamento/' + id);
}
export const postAgendamento = (agendamento) => {
  return axios.post(server + '/api/agendamento', agendamento);
}
export const putAgendamento = (agendamento) => {
  return axios.put(server + '/api/agendamento', agendamento);
}
export const deleteAgendamento = (id) => {
  return axios.delete(server + '/api/agendamento/' + id);
}

/* API de Plantões */
export const getPlantoes = (params) => {
  return axios.get(server + '/api/plantao', {
    params: params
  });
}
export const getPlantao = (id) => {
  return axios.get(server + '/api/plantao/' + id);
}
export const postPlantao = (plantao) => {
  return axios.post(server + '/api/plantao', plantao);
}
export const putPlantao = (plantao) => {
  return axios.put(server + '/api/plantao', plantao);
}
export const deletePlantao = (id) => {
  return axios.delete(server + '/api/plantao/' + id);
}
export const postArquivosPlantao = (idPlantao, arquivos) => {
  return axios.post(server + `/api/plantao/${idPlantao}/files/upload`, arquivos)
}
export const putArquivosPlantao = (idPlantao, arquivos) => {
  return axios.put(server + `/api/plantao/${idPlantao}/files/update`, arquivos);
}

/* API de Glosas */
export const getGlosas = (params) => {
  return axios.get(server + '/api/glosa', {
    params: params
  });
}
export const getGlosa = (id) => {
  return axios.get(server + '/api/glosa/' + id);
}
export const postGlosa = (glosa) => {
  return axios.post(server + '/api/glosa', glosa);
}
export const putGlosa = (glosa) => {
  return axios.put(server + '/api/glosa', glosa);
}
export const deleteGlosa = (id) => {
  return axios.delete(server + '/api/glosa/' + id);
}
export const postArquivosGlosa = (idGlosa, arquivos) => {
  return axios.post(server + `/api/glosa/${idGlosa}/files/upload`, arquivos)
}
export const putArquivosGlosa = (idGlosao, arquivos) => {
  return axios.put(server + `/api/glosa/${idGlosao}/files/update`, arquivos);
}

/* API do Dashboard */
export const getDadosDashboard = (params) => {
  return axios.get(server + '/api/dashboard', {
    params: params
  });
}
export const getDadosDashboardAuditoria = (params) => {
  return axios.get(server + '/api/dashboard/auditoria', {
    params: params
  });
}

export const getDadosDashboardPorTipoFiltragem = (params) => {
  return axios.get(server + '/api/dashboard/filtrar', {
    params: params
  });
}

/* API de parâmetros */
export const getParametros = () => {
  return axios.get(server + '/api/parametro_sistema');
}
export const putParametros = parametros => {
  return axios.put(server + '/api/parametro_sistema', parametros)
}

/* API de Paciente */
export const getPacientePorNome = (nome) => {
  return axios.get(server + `/api/paciente/nome`, {
    params: {
      nome
    }
  });
}
export const getPacientePorCpf = (cpf) => {
  return axios.get(server + `/api/paciente/cpf`, {
    params: {
      cpf
    }
  });
}
