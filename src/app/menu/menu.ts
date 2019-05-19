export interface Menu {
    id: number;
    nome: string;
    url: string;
    icone: string;
    subMenus: Array<Menu>;
    pai: boolean;
}