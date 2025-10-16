function Book({ title, price, imageUrl }) {
  const image = React.createElement("img", {
    src: imageUrl,
    width: 250,
    height: 250,
    alt: `${title} Book Image`
  }, null);

  const h4 = React.createElement("h4", null, `Title: ${title}`);
  const h3 = React.createElement("h3", null, `Price: ₹${price}/-`);
  const bt = React.createElement("button", null, "Add To cart");

  return React.createElement("div", { className: "card" }, image, h4, h3, bt);
}

const books = [
  {
    title: "Physics",
    price: 324,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s"
  },
  {
    title: "Chemistry",
    price: 299,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s"
  },
  {
    title: "Mathematics",
    price: 350,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s"
  }
];

const bookElements = books.map(book =>
  React.createElement(Book, {
    title: book.title,
    price: book.price,
    imageUrl: book.imageUrl
  })
);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(React.createElement("div", null, ...bookElements));