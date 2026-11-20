import './VolumeBar.css'
import { useState } from 'react'

const VOLUME_STEP = 10
const SPEAKER_PATH = "M 1 7 H 6 L 13 1 V 19 L 6 13 H 1 Z"

export default function VolumeBar() {
    const [volume, setVolume] = useState(50)

    const changeVolume = (change: number) => {
        setVolume(Math.min(100, Math.max(0, volume + change)))
    }

    return (
        <div className="volume-bar">
            <button className="volume-button" aria-label="Decrease volume" onClick={() => changeVolume(-VOLUME_STEP)}>
                <svg viewBox="0 0 26 20" width="26" height="20">
                    <path d={SPEAKER_PATH} />
                    <path className="volume-sign" d="M 17 13 H 25" />
                </svg>
            </button>
            <div className="volume-track">
                <div className="volume-level" style={{ width: `${volume}%` }} />
            </div>
            <button className="volume-button" aria-label="Increase volume" onClick={() => changeVolume(VOLUME_STEP)}>
                <svg viewBox="0 0 26 20" width="26" height="20">
                    <path d={SPEAKER_PATH} />
                    <path className="volume-sign" d="M 17 13 H 25 M 21 9 V 17" />
                </svg>
            </button>
        </div>
    )
}
