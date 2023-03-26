import "bulma/css/bulma.css";
import "../styles.css"
import CarForm from "../components/Car/CarForm";
import CarList from "../components/Car/CarList";
import CarSearch from "../components/Car/CarSearch";
import CarValue from "../components/Car/CarValue";

function CarPage() {
    return (
        <div className="container is-fluid">
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    );
}

export default CarPage;