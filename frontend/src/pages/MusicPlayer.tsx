import AlbumCover from '../components/AlbumCover'
import MusicControls from '../components/MusicControls'
import VolumeBar from '../components/VolumeBar'
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
            <VolumeBar />
        </div>
    )
}
