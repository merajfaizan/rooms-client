import PhotoAlbum from "react-photo-album";

const PhotoGallary = () => {
  const photos1 = [
    { src: "https://i.ibb.co/gdZ5WpL/r1.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/LzH7VJp/r3.jpg", width: 1000, height: 900 },
    { src: "https://i.ibb.co/WpFFYLZ/r9.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/J7NQMNH/r6.jpg", width: 600, height: 300 },
  ];
  const photos2 = [
    { src: "https://i.ibb.co/34SVZvD/r7.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/2vDSnqB/r4.jpg", width: 1000, height: 900 },
    { src: "https://i.ibb.co/gdZ5WpL/r1.jpg", width: 500, height: 500 },
    { src: "https://i.ibb.co/LzH7VJp/r3.jpg", width: 800, height: 500 },
  ];
  return (
    <div className="mb-5">
      <h1 data-aos="fade-down" className="text-center text-5xl py-4 border-y my-5 border-gray-700">
        Room Photo Gallery
      </h1>
      <PhotoAlbum layout="rows" photos={photos1} />
      <br />
      <PhotoAlbum layout="rows" photos={photos2} />
    </div>
  );
};

export default PhotoGallary;
