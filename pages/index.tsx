import PageTitle from "../components/PageTitle"
import ProductCard from "../components/ProductCard"
import { Product } from "@prisma/client"
import { get, post } from "../lib/api"

type Props = { 
  products: Product[]
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  // busque produtos no endpoint const products = await 
  const products = [] as any // implementação errada para poder compilar
  return {
    props: { products }
  }
}

function Home({ products }: Props) {
  const addProduct = async () => {
    const prod = await post<Product>('/addProduct', {
      description: 'DFSFDUJDFFHDSUFUHUSHDFHF',
      name: 'TEST PRODUCT',
      photo: '/products/1.png',
      price: 50
    })
    console.log(prod)
  }

  return (
    <>
      <PageTitle title="Home Page"/>
      <main className="flex flex-col px-10 py-4 gap-4">
        <button 
          className="bg-gray-2 text-black rounded-lg px-4 py-2 font-bold" 
          onClick={addProduct}
        >Add Product</button>
        <div className="flex flex-wrap gap-3">
          liste os produtos aqui
        </div>
      </main>
    </>
  )
}

export default Home