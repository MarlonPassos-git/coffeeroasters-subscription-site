import { ItemCoffee } from "./ItemCoffee"
import { CoffeeList, Container, Title } from "./styles"

export function SectionOurCollection() {

  return (
    <Container >

      <Title>our collection</Title>

      <CoffeeList>
        <ItemCoffee
          img='./images/home/desktop/image-gran-espresso.png'
          name='Gran Espresso'
          description="Light and flavorful blend with cocoa and black pepper for an intense experience."
        />
        <ItemCoffee
          img='./images/home/desktop/image-planalto.png'
          name='Planalto'
          description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."
        />
        <ItemCoffee
          img='./images/home/desktop/image-piccollo.png'
          name='Piccollo'
          description="Mild and smooth blend featuring notes of toasted almond and dried cherry."
        />
        <ItemCoffee
          img='./images/home/desktop/image-danche.png'
          name='Danche'
          description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes."
        />

      </CoffeeList>
    </Container >
  )
}