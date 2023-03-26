import "bulma/css/bulma.css";
import "../style.css";
import { useDispatch } from "react-redux";
import MoviePlaylist from "../components/Playlist/MoviePlaylist";
import SongPlaylist from "../components/Playlist/SongPlaylist";
import { reset } from "../store";

function PlaylistPage() {
    const dispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(reset());
    };

    return (
        <div className="container is-fluid">
            <button onClick={() => handleResetClick()} className="button is-danger">
                Reset Both Playlists
            </button>
            <hr />
            <MoviePlaylist />
            <hr />
            <SongPlaylist />
        </div>
    );
}

export default PlaylistPage;
