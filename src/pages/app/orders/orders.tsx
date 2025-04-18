import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderRowTable } from "./order-table-row";
import { OrderTableFilter } from "./order-table-filter";
import { Pagination } from "@/components/pagination";

export function Orders (){
    return(
        <>
            <Helmet title="Pedidos"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            
            <div className="space-y-2.5">
            <OrderTableFilter/>

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]">Detalhes do pedido</TableHead>
                                <TableHead className="w-[148px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[148px]">Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">Total do pedido</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({length:10}).map ((_, i) => {
                                return(
                                <OrderRowTable key={i}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                    </div>
                    <Pagination pageIndex={0} totalCount={185} perPage={10}/>
                </div>
            </div>
        </>
    )
}