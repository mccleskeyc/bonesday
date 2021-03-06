import React, { Component } from 'react'
import Updated from './Updated'
export class Bones extends Component {
    render() {
        return (
            <div className="decisioncontainer">
                <div className="intro">
                    <a href="https://www.tiktok.com/@jongraz?" className="link">Noodle</a> says today is a...
                </div>

                <br />

                <div className="decisiontext">🦴 Bones Day! 🦴</div>
                <Updated />

                <img
                    className="bonesimg"
                    src="https://media.npr.org/assets/img/2021/10/19/screen-shot-2021-10-19-at-11.51.31_custom-e5ca476577cde7ec020eebd95b7daa4228cfe9af-s1200-c85.webp"
                    alt="Screenshot from @jongraz's TikTok showing Noodle with bones"></img>

                <br />
                <br />

                <div className="decisioninfo">He's feeling jazzed! Go ahead and treat yourself, take that leap of faith, and have a good day!</div>
            </div>
        )
    }
}

export default Bones
