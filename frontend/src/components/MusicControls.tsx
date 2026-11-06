import './MusicControls.css'
import { useState } from 'react'

export default function MusicControls() {
    const [showPlay, setShowPlay] = useState(true)

    return (
        <div className="music-controls">
            <div>
                <svg className="control-button rewind" viewBox="0 0 100 100" width="100" height="100">
                    <path className="purple-button" d="M 50 50 L 70 35 L 70 65 Z" />
                    <path className="purple-button" d="M 30 50 L 50 35 L 50 65 Z" />
                </svg>
            </div>
            <div onClick={()=>setShowPlay(!showPlay)}>
                {showPlay ?
                <svg className="play-button" viewBox="0 0 100 100" width="100" height="100">
                    <path className="purple-button" d="M 39 28 L 74 50 L 39 72 Z" />
                </svg>
                :
                <svg className="pause-button" viewBox="0 0 100 100" width="100" height="100">
                    <rect className="purple-button" x="35" y="30" width="10" height="40" />
                    <rect className="purple-button" x="55" y="30" width="10" height="40" />
                </svg>
                }

            </div>
            <div>
                <svg className="control-button fast-forward" viewBox="0 0 100 100" width="100" height="100">
                    <path className="purple-button" d="M 30 35 L 50 50 L 30 65 Z" />
                    <path className="purple-button" d="M 50 35 L 70 50 L 50 65 Z" />
                </svg>
            </div>
        </div>    
    )
}