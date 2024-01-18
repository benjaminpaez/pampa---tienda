import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  params: {
    id: string;
  }
}

export default function page( { params } : Props) {
  
  const {id} = params;
  
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Order #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
              )
            }>
              <IoCardOutline size={30} /> 
              {/* <span className="mx-2">Pago pendiente</span> */}
              <span className="mx-2">Pago confirmado</span>

            </div>

            {productInCart.map((product) => (
              <div 
                key={product.slug} 
                className="flex mb-5"
              >
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "100px"
                  }}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  <button className="underline mt-3">Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">
              Direccion de entrega
            </h2>
            <div className="mb-10">
              <p className="text-2xl font-bold">Benjamin Paez</p>
              <p className="font-semibold">Resistencia s/n</p>
              <p>Pampa del infierno</p>
              <p>Chaco</p>
              <p>Argentina</p>
              <p>CP: 3500</p>
              <p>+54 3624 652362</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-300 mb-10">

            </div>

            <h2 className="text-2xl mb-2">
              Resumen de orden
            </h2>
            <div className="grid grid-cols-2">
              <span>Cantidad</span>
              <span className="text-right">1 producto</span>

              <span>Subtotal</span>
              <span className="text-right">$ 3500</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 7560</span>
            </div>

            <div className="mt-5 mb-2 w-full">

            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
              )
            }>
              <IoCardOutline size={30} /> 
              {/* <span className="mx-2">Pago pendiente</span> */}
              <span className="mx-2">Pago confirmado</span>

            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
