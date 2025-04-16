import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails (){

    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 1564d56s4d</DialogTitle>
                <DialogDescription> Detalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-center">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                <span className="font-medium text-muted-foreground">Pendente</span>
                            </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-center">
                                Carlos Eduardo
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-center">
                            (11) 98643-1806
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Email</TableCell>
                            <TableCell className="flex justify-center">
                            carlos@gmail.com
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-center">
                            há 5 minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell >Pizza de mussarela</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69,98</TableCell>
                            <TableCell className="text-right">R$ 139,88</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Pizza de mussarela</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69,98</TableCell>
                            <TableCell className="text-right">R$ 139,88</TableCell>
                        </TableRow>
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">
                                R$ 259,60
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}