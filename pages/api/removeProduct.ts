import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

type Error = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<void | Error>) {
    if(req.method === 'DELETE') {
        if(typeof req.query?.id === 'string') {
            try {
                await prisma.productAvaliation.deleteMany({ where: { productId: req.query.id }})
                await prisma.productSpecification.deleteMany({ where: { productId: req.query.id }})
                await prisma.product.delete({ where: { id: req.query.id }})
                res.status(200).json()
            } catch (e) {
                console.error(e)
                res.status(500).send({ message: 'Failed to remove product' }) 
            }
        } else res.status(400).send({ message: 'Invalid ID' }) 
    } else {
        res.status(404).send({ message: 'Unsuported method' })
    }
}