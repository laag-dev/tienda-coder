import { useContext, useState } from "react";
import { ListCartContext } from "../context/ListCartContext";

export const ShoppingCart = () => {
  const { listCart, clearCart } = useContext(ListCartContext);
  const [showMessage, setShowMessage] = useState(false);

  const calculateTotal = () => {
    //calculo del total de precios de los productos
    return listCart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const showMessageHandler = () => {
    // Cambiar el estado para mostrar el mensaje
    setShowMessage(true);
  };
  return (
    <div className="bg-white p-4  shadow-lg">
      <h2 className="text-3xl border-b-2 md:text-5xl font-bold text-black mb-2 p-2 text-center">
        Productos del carrito
      </h2>
      {listCart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b-2 py-2"
        >
          <div className="flex items-center space-x-4">
            <img
              src={item.imgUrl}
              alt={`Imagen de ${item.title}`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-black text-lg md:text-xl mb-4">
                Cantidad: {item.quantity}
              </p>
              <p className="text-black text-lg md:text-xl mb-4">
                Precio: ${item.price}
              </p>
              <p className="text-black text-lg md:text-xl mb-4">
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>
          </div>
        </div>
      ))}
      {listCart.length > 0 && (
        <div className="mt-4">
          <p className="font-bold text-black text-xl mb-4">
            Total: ${calculateTotal()}
          </p>
          <div className="flex justify-end mt-4 ">
            <button onClick={() => clearCart()} className="button mr-4">
              Vaciar carrito
            </button>
            <button className="button" onClick={showMessageHandler}>
              Finalizar compra
            </button>
          </div>
        </div>
      )}
      {/* Mostrar el mensaje si showMessage es true */}
      {showMessage && (
        <p className="font-bold text-black text-xl mb-4">
          ¡Compra finalizada con éxito!
        </p>
      )}
      {/* Vacía carrito */}
      {listCart.length === 0 && (
        <p className="font-bold items-center text-black text-xl mb-4">
          Tu carrito está vacío.
        </p>
      )}
    </div>
  );
};
