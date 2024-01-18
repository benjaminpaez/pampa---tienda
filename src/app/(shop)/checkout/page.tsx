import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function page() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Comprobar productos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

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

              <p className="mb-5">
                <span className="text-xs">
                  Al hacer click aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a> 
                </span>
              </p>

              <Link 
                href="/orders/123"
                className="flex btn-primary justify-center"
              >
                Realizar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
