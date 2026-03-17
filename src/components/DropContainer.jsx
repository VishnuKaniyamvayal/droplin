import { useRef, useState } from "react"
import Container from "./Container";


const DropContainer = () => {
    const [itemOnSurface, setItemOnSurface] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const boxRef = useRef(null);
    const handleDragEnter = (e) => {
        e.preventDefault();
        setItemOnSurface(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setItemOnSurface(false);
    }

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        setX(x);
        setY(y);
    };

  return (
    <div onPointerMove={handleMouseMove} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} className={`h-full relative flex items-center justify-center w-full rounded-4xl bg-white ${itemOnSurface ? 'shadow-primary shadow-sm transition-all duration-500' : ''}`}>
        <Container x={x} y={y} yOffSet={200}/>
        <div className="mb-5">{itemOnSurface ? "Drop it here!" + x + ", " + y : "Drag and drop your file here" + x + ", " + y}</div>
    </div>
  )
}

export default DropContainer