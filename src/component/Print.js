import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { UserCV } from "./UserCV";
import './Print.css';

const Print = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div>
            <UserCV ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
        </div>
    );
}

export default Print;
