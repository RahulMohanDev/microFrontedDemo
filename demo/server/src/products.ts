export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Test food 1',
    price: 5.99,
    description: 'some food',
    image: 'http://localhost:8080/food1.jpg',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed quam leo. Proin non nunc a magna pharetra commodo. Pellentesque odio quam, vestibulum in aliquet nec, eleifend a elit. Quisque volutpat vitae turpis vitae porttitor. Duis faucibus diam nisi, non blandit sem eleifend sit amet. Mauris in imperdiet dolor, in finibus nulla. Integer sagittis euismod mi, nec luctus arcu posuere iaculis. Duis eu metus velit. Maecenas ultrices venenatis urna, pharetra ultricies dolor dapibus sed. Suspendisse eu orci accumsan lorem maximus gravida eget ut magna. Fusce faucibus massa nec purus accumsan eleifend. Maecenas viverra blandit magna. Cras scelerisque rhoncus neque vitae rhoncus. Aliquam vestibulum nibh sit amet augue pulvinar pulvinar. Vestibulum porta tortor et nisi varius faucibus. Donec vitae augue in sem mattis fringilla.',
  },
  {
    id: 2,
    name: 'test food 2',
    price: 8.99,
    description: 'some test 2',
    image: 'http://localhost:8080/food2.jpg',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed quam leo. Proin non nunc a magna pharetra commodo. Pellentesque odio quam, vestibulum in aliquet nec, eleifend a elit. Quisque volutpat vitae turpis vitae porttitor. Duis faucibus diam nisi, non blandit sem eleifend sit amet. Mauris in imperdiet dolor, in finibus nulla. Integer sagittis euismod mi, nec luctus arcu posuere iaculis. Duis eu metus velit. Maecenas ultrices venenatis urna, pharetra ultricies dolor dapibus sed. Suspendisse eu orci accumsan lorem maximus gravida eget ut magna. Fusce faucibus massa nec purus accumsan eleifend. Maecenas viverra blandit magna. Cras scelerisque rhoncus neque vitae rhoncus. Aliquam vestibulum nibh sit amet augue pulvinar pulvinar. Vestibulum porta tortor et nisi varius faucibus. Donec vitae augue in sem mattis fringilla.',
  },
  {
    id: 3,
    name: 'best food 3',
    price: 7.99,
    description: 'Best food in all of bangalore',
    image: 'http://localhost:8080/food3.jpg',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed quam leo. Proin non nunc a magna pharetra commodo. Pellentesque odio quam, vestibulum in aliquet nec, eleifend a elit. Quisque volutpat vitae turpis vitae porttitor. Duis faucibus diam nisi, non blandit sem eleifend sit amet. Mauris in imperdiet dolor, in finibus nulla. Integer sagittis euismod mi, nec luctus arcu posuere iaculis. Duis eu metus velit. Maecenas ultrices venenatis urna, pharetra ultricies dolor dapibus sed. Suspendisse eu orci accumsan lorem maximus gravida eget ut magna. Fusce faucibus massa nec purus accumsan eleifend. Maecenas viverra blandit magna. Cras scelerisque rhoncus neque vitae rhoncus. Aliquam vestibulum nibh sit amet augue pulvinar pulvinar. Vestibulum porta tortor et nisi varius faucibus. Donec vitae augue in sem mattis fringilla.',
  },
];

export default products;
