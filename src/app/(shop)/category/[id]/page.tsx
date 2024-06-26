import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function page({params}: Props) {
  const {id} = params;
  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  // if(id === 'kids') {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle='Todos los productos'
        className='mb-2'
      /> 

      <ProductGrid products={products}/>

    </>
  )
}
