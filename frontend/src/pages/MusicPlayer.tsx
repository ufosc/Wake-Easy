import AlbumCover from '../components/AlbumCover'
import MusicControls from '../components/MusicControls'
import './MusicPlayer.css'

export default function MusicPlayer() {
    return (
        <div className="music-player">
            <AlbumCover />
            <div className="song-name-menu">
                <div>Song Name</div>
                <div>...</div>
            </div>

            <MusicControls />
        </div>
    )
}
