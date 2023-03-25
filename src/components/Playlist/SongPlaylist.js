import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../../data";
import { addSong, removeSong } from "../../store";
import Button from "../Button";

function SongPlaylist() {
    const dispatch = useDispatch();

    const songPlaylist = useSelector((state) => {
        return state.songs;
    });

    const handleSongAdd = (song) => {
        dispatch(addSong(song));
    };
    const handleSongRemove = (song) => {
        dispatch(removeSong(song));
    };

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <li key={song}>
                {song}
                <Button
                    danger
                    onClick={() => handleSongRemove(song)}
                >
                    X
                </Button>
            </li>
        );
    });

    return (
        <div className="content">
            <div className="table-header">
                <h3 className="subtitle is-3">Song Playlist</h3>
                <div className="buttons">
                    <Button
                        primary
                        onClick={() => handleSongAdd(createRandomSong())}
                        className="button is-link"
                    >
                        + Add Song to Playlist
                    </Button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    );
}

export default SongPlaylist;
