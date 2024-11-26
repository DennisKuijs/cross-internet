import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PrismaClient } from "@prisma/client"


// const categories = await prisma.product.count({
//     orderBy: 'id'
// });
//console.log(categories);

export const ProductsList = async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    const categories = await prisma.category.count();
    console.log(categories)

    return (
        <Table>
            <TableCaption>Products</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}
