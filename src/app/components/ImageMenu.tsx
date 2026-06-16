export default function ImageMenu() {
  const menuItems = [
    { title: "Pocket Tapes", img: "/images/Pocket-Tape.png" },
    { title: "Fibreglass Tapes", img: "/images/Fibreglass-2.png" },
    { title: "Steel Long Tapes", img: "/images/Steel-Long-tape-1.png" },
    { title: "Spirit Levels", img: "/images/spirit-levels-2.png" },
    { title: "Measuring Wheels", img: "/images/Measuring-Wheels-3.png" }
  ];

  return (
    <div className="image-menu-section">
      <div className="image-menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="image-menu-item">
            <div className="image-circle">
              <img src={item.img} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
