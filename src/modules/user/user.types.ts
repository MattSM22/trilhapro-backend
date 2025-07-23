export interface IUser {
  id?: string;
  nome: string;
  email: string;
  senha: string;
  data_nasc: Date;
  apelido?: string;
  ocupacao: string;
  nacionalidade: string;
  residencia: string;
  fotoUrl?: string;
}