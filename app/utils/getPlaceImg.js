// TODO: Use image from google map pictures
export default function geImage() {
  const imageId = Math.floor(Math.random() * 100 + 1);
  return `https://picsum.photos/g/200/300/?iamge=${imageId}`;
}
