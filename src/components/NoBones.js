import React, { Component } from 'react'

export class NoBones extends Component {
    render() {
        return (
            <div className="decisioncontainer">
                <div className="intro">
                <a href="https://www.tiktok.com/@jongraz?" className="link">Noodle</a> says today is a...                </div>
                
                <br />

                <div className="decisiontext">🚫🦴 No Bones Day! 🚫🦴</div>
                <div className="update">Last Updated: 10/21/21 at 2:48pm ET</div>

                <img
                    className="bonesimg"
                    src="https://i.imgur.com/Mb3hL5b.jpg"
                    alt="Screenshot from @jongraz's TikTok showing Noodle without bones"></img>
                    
                <br />
                <br />

                <div className="decisioninfo">Noodle is giving you permission to take the time you need today. Slow things down today, practice self care, and maybe call out of work.
                </div>
                <div className="update">
                    All of Noodle's original content can be found <a href="https://www.tiktok.com/@jongraz?" className="link">@jongraz</a> on TikTok.
                </div>
            
            </div>
        )
    }
}

export default NoBones
