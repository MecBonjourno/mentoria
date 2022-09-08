import PageTitle from "../../components/PageTitle"
import { get, remove } from "../../lib/api"
import { GetServerSideProps } from 'next'
import Image from "next/image"
import DetailedProduct from "../../prisma/types/DetailedProduct"
import { DeleteFilled, LeftCircleFilled } from "@ant-design/icons"

type Query = {
  id: string
}

type Props = { 
  product: DetailedProduct
}

export const getServerSideProps: GetServerSideProps<Props, Query> = async (context) => {
  console.log(context.query.id)
  const product = {} as any // implementação errada para poder compilar
  return {
    props: { product } // props will be passed to the page
  }
}

function ProductPage({ product }: Props) {
  return (
    <>
      <PageTitle title="Product Page"/>
      <main className="flex flex-col gap-4 px-16 py-8 max-w-3xl mx-auto relative">
        <div className="flex flex-row gap-4 p-2 bg-gray-6 rounded-lg w-full">
          <span className="shrink-0">
            <Image width={200} height={200} src={product.photo}/>
          </span>
          <div className="flex flex-col gap-2 w-full">
            título + descrição do produto + valor
          </div>
        </div>
        card de especificações
        card de avaliações
        card com botão de deleção
      </main>
    </>
  )
}

export default ProductPage