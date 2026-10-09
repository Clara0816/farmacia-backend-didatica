import { Pedido } from "../model/Pedido.js";
import type { ItemPedidoDTO } from "./ItemPedidoDTO.js";

export interface PedidoDTO {
    idVenda?: number;
    idCliente: number;
    itens: ItemPedidoDTO[];
}