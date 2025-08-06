import { useCart } from '../../hooks/CartContext';
import { Table } from '../index';

export function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct } = useCart();

  console.log(cartProducts);
  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Header>
      {/* <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.td>
                <img src={product.url} />
              </Table.td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>{product.quantity}</Table.Td>
              <Table.Td></Table.Td>
            </Table.Tr>
          ))
        ) : (
          <div>Carrinho Vazio</div>
        )}
      </Table.Body> */}
    </Table.Root>
  );
}
