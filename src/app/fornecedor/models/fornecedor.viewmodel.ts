export interface FornecedorViewModel {
    id?: string
    nome: string
    documento: string
    tipoFornecedor: number
    endereco: Endereco
    ativo: boolean
    produtos: Produto[]
  }
  
  export interface Endereco {
    id: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cep: string
    cidade: string
    estado: string
    fornecedorId: string
  }
  
  export interface Produto {
    id: string
    fornecedorId: string
    nome: string
    descricao: string
    imagemUpload: string
    imagem: string
    valor: number
    dataCadastro: string
    ativo: boolean
    nomeFornecedor: string
  }