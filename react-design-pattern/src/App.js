import { NumberedList } from "./NumberedList";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { RegularList } from "./RegularList";
import { Modal } from "./Modal";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const product = [
  {
      name: "Flat-Screen TV",
      price: "R500",
      description: "Huge LCD Screen, a great deal",
      rating: 4.5,
  },
  {
      name: "Basketball",
      price: "R130",
      description: "Just like the pros use",
      rating: 3.5,
  },
  {
      name: "Running Shoes",
      price: "R100",
      description: "State-of-the-art technology for optimum performance",
      rating: 4.2,
  },
];

function App() {
  return (
      <>
          <Modal>
              <LargeProductListItem product={product[0]} />
          </Modal>
      </>
  );
}

export default App;
