import Image from "next/image";

function PlayBtn({ items, onClick }) {

  return (

      <button
        onClick={() => onClick(true)}
        className="play rounded-full flex justify-center absolute  "
      >
        <Image
          src={items.imgSrc}
          alt={items.imgSrc}
          width={64}
          height={64}
          className="play-icon"
        />
      </button>

  );
}

export default PlayBtn;
