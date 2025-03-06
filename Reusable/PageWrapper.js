export default class CorePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div>
                <header>
                    <h1 class="jacquard-24-regular font-xlarge">Cam's House</h1>
                </header>   
            </div>
            <div class="content-wrapper fancy-border-exterior uncial-antiqua-regular">
                <div class="fancy-border-interior">
                    <div class='row'>
                        <div class='column col-20 fancy-border-r-exterior jacquard-24-regular font-large match-col-height'>
                            <div class="fancy-border-r-interior">
                                <div>
                                    Linqs
                                </div>
                                <div class="font-medium">
                                    <li>
                                        Home
                                    </li>
                                    <li>
                                        About
                                    </li>
                                    <li>
                                        Contact
                                    </li>

                                </div>
                            </div>
                        </div>
                        <div class='column col-80 vt323-regular font-medium'>
                            <div>
                                HOME
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum velit in justo aliquet pulvinar. Sed mattis eros a purus vulputate malesuada. Sed suscipit tempus risus. Sed dignissim quam enim, sit amet tempus enim aliquam vitae. Etiam pellentesque vitae lacus quis fermentum. Nullam hendrerit tristique urna, eu tempor diam finibus id. Aenean eu vulputate leo. Sed suscipit mi libero, in pulvinar nisl accumsan ac. In ullamcorper congue mauris, in viverra metus auctor faucibus. Morbi eget elit elit. Fusce in lobortis nisl, aliquet fermentum velit. Maecenas mattis convallis neque, eu varius metus vestibulum tincidunt. Quisque consectetur mi quis est fermentum, imperdiet dictum odio hendrerit.
                                <br/>
                                <br/>
                                Nullam orci tellus, molestie rhoncus laoreet ornare, hendrerit ut odio. Maecenas viverra lobortis massa, vitae malesuada est efficitur et. Maecenas viverra ante nisl, a eleifend elit commodo nec. Quisque sollicitudin, metus eu imperdiet feugiat, lectus felis blandit nisi, ut egestas est urna ac nisl. Nunc nec urna sed massa convallis gravida. Nam id mattis lorem, in euismod felis. Duis sit amet dapibus tortor.
                                <br/>
                                <br/>
                                Phasellus tristique tincidunt urna, eget commodo nulla gravida nec. Donec dictum neque vel tempus vulputate. Nam gravida, lacus vel gravida mattis, augue ex porta dui, eget lacinia magna nibh vitae turpis. Vivamus eleifend arcu commodo auctor bibendum. Sed et dignissim dui. Sed ultrices pretium ultricies. Phasellus sit amet nunc risus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}