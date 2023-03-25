import "../style.css";
import { useDispatch } from "react-redux";
import MoviePlaylist from "../components/Playlist/MoviePlaylist";
import SongPlaylist from "../components/Playlist/SongPlaylist";
import { reset } from "../store";
import Button from "../components/Button";

export default function App() {
    const dispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(reset());
    };

    return (
        <div className="container is-fluid">
            <Button danger onClick={() => handleResetClick()}>
                Reset Both Playlists
            </Button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
        </div>
    );
}
