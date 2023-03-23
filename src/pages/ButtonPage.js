import { BiAccessibility } from "react-icons/bi";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
    }


    return (
        <div>
            <div>
                <Button primary rounded className="mb-4" onClick={handleClick}><BiAccessibility />Hello</Button>
            </div>
            <div>
                <Button success className="mb-4">Click me</Button>
            </div>
            <div>
                <Button danger outline className="mb-4">Run away</Button>
            </div>
            <div>
                <Button warning className="mb-4">DND</Button>
            </div>
            <div>
                <Button secondary outline className="mb-4">Off</Button>
            </div>
        </div>
    );
}

export default ButtonPage;