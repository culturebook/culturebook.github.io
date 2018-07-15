import React from 'react';

const Footer = (props) => {

    return (

            <footer className="f-main">

                <section>

                <svg className="f-logo" width="200" viewBox="0 0 159 23" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><title>Culturebook</title><g fill="#fff" fillRule="nonzero"><path d="M10.934 19.047c.157.274.294.617.412 1.03.117.41.186.83.206 1.262-1.157.45-2.48.675-3.97.675-2.507 0-4.398-.71-5.67-2.13C.636 18.464 0 16.547 0 14.137c0-1.117.157-2.155.47-3.116.314-.96.78-1.793 1.396-2.498.618-.705 1.387-1.264 2.308-1.675.92-.413 1.99-.62 3.204-.62.823 0 1.548.05 2.175.148.627.098 1.225.255 1.793.47 0 .334-.044.72-.132 1.162-.09.44-.21.828-.368 1.16-.96-.332-2.057-.5-3.292-.5-1.51 0-2.636.5-3.38 1.5-.745 1-1.117 2.322-1.117 3.968 0 1.88.42 3.258 1.264 4.13.843.872 2 1.308 3.47 1.308.587 0 1.13-.04 1.63-.118.5-.078 1.005-.215 1.514-.41zM14.755 6.584c.216-.04.46-.07.735-.088.275-.02.51-.03.706-.03.215 0 .46.01.734.03.275.02.52.05.735.088v8.26c0 .94.088 1.72.265 2.336.176.618.44 1.103.793 1.455.353.353.784.598 1.294.735s1.097.206 1.763.206c1 0 1.852-.108 2.558-.323V6.583c.215-.038.455-.068.72-.087.264-.02.504-.03.72-.03.215 0 .455.01.72.03.264.02.505.05.72.088v14.608c-.686.196-1.504.383-2.454.56-.95.175-1.935.263-2.954.263-.96 0-1.867-.083-2.72-.25-.852-.166-1.6-.504-2.248-1.013-.646-.51-1.156-1.225-1.528-2.146-.372-.92-.56-2.136-.56-3.645V6.585zM31.745.118c.215-.04.455-.07.72-.09.264-.018.504-.028.72-.028.215 0 .456.01.72.03.265.02.505.048.72.088v16.99c0 .548.05.98.147 1.292.098.314.23.554.397.72.166.167.36.275.587.324.225.05.465.073.72.073.176 0 .377-.01.603-.03.225-.02.416-.048.573-.087.176.685.264 1.43.264 2.233-.274.098-.607.162-1 .19-.39.03-.754.046-1.087.046-.568 0-1.097-.07-1.587-.207-.49-.137-.92-.363-1.293-.676-.373-.314-.666-.735-.882-1.264-.216-.53-.323-1.186-.323-1.97V.118zM41.12 8.906H38.83l-.117-.41 5.056-5.645h.236v3.734h3.82c.08.333.118.706.118 1.117 0 .217-.01.422-.03.618-.02.196-.048.392-.087.588h-3.82v6.878c0 .823.033 1.48.1 1.97.07.49.188.867.354 1.13.167.266.392.442.676.53.284.088.642.132 1.073.132.333 0 .647-.024.94-.073.295-.05.56-.103.794-.162.137.393.22.795.25 1.206.03.412.044.774.044 1.088-.392.098-.803.17-1.234.22-.43.05-.892.074-1.382.074-1.41 0-2.513-.343-3.307-1.03-.792-.685-1.19-1.82-1.19-3.408V8.906zM50.91 6.584c.215-.04.46-.07.734-.088.274-.02.51-.03.705-.03.215 0 .46.01.734.03.274.02.52.05.735.088v8.26c0 .94.087 1.72.263 2.336.177.618.44 1.103.794 1.455.353.353.784.598 1.293.735.51.137 1.098.206 1.764.206 1 0 1.852-.108 2.557-.323V6.583c.217-.038.457-.068.72-.087.266-.02.506-.03.72-.03.217 0 .457.01.722.03.264.02.504.05.72.088v14.608c-.686.196-1.504.383-2.455.56-.95.175-1.935.263-2.954.263-.96 0-1.866-.083-2.718-.25-.853-.166-1.602-.504-2.25-1.013-.646-.51-1.155-1.225-1.528-2.146-.372-.92-.558-2.136-.558-3.645V6.585zM67.957 6.584c.216-.04.42-.07.617-.088.196-.02.402-.03.618-.03.215 0 .43.01.646.03.216.02.412.05.588.088.06.294.118.68.176 1.16.06.48.09.888.09 1.22.41-.665.954-1.243 1.63-1.733.676-.49 1.543-.734 2.6-.734.158 0 .32.005.486.015.167.01.31.025.426.045.04.176.07.362.09.558.018.196.028.402.028.617 0 .236-.015.48-.044.735-.03.255-.064.5-.103.735-.157-.04-.318-.06-.485-.06h-.397c-.53 0-1.033.075-1.514.222-.48.147-.912.406-1.294.78-.382.37-.686.88-.91 1.527-.226.646-.34 1.48-.34 2.498v7.495c-.215.04-.455.068-.72.088-.264.02-.504.03-.72.03-.215 0-.455-.01-.72-.03-.264-.02-.514-.048-.75-.087V6.583zM80.626 14.844c.04 1.646.465 2.85 1.278 3.615.813.763 2.014 1.145 3.6 1.145 1.392 0 2.715-.245 3.97-.735.156.294.283.652.38 1.073.1.422.158.838.177 1.25-.645.274-1.356.48-2.13.617-.774.137-1.63.205-2.572.205-1.37 0-2.547-.19-3.527-.573-.98-.382-1.787-.92-2.424-1.616-.637-.696-1.102-1.52-1.396-2.47-.294-.95-.44-1.993-.44-3.13 0-1.117.14-2.16.425-3.13.285-.97.72-1.813 1.308-2.528.588-.715 1.328-1.283 2.22-1.705.89-.42 1.944-.632 3.16-.632 1.038 0 1.95.178 2.733.53.784.353 1.44.838 1.97 1.455.528.618.93 1.352 1.204 2.205.275.852.412 1.778.412 2.778 0 .274-.01.563-.03.867-.02.303-.04.563-.058.78H80.626zm7.465-2.176c0-.548-.072-1.072-.22-1.572-.146-.5-.362-.936-.646-1.308-.284-.372-.646-.67-1.087-.897-.44-.224-.965-.337-1.573-.337-1.195 0-2.11.363-2.748 1.088-.637.726-1.024 1.735-1.16 3.028h7.435zM94.764.118c.215-.04.455-.07.72-.09.264-.018.504-.028.72-.028.215 0 .46.01.735.03.273.02.518.048.734.088v8.288c.352-.587.9-1.097 1.646-1.528.744-.43 1.646-.647 2.704-.647.9 0 1.734.148 2.498.442.764.294 1.42.75 1.97 1.367.548.616.974 1.4 1.278 2.35.304.95.456 2.073.456 3.366 0 2.587-.73 4.61-2.19 6.07s-3.562 2.19-6.305 2.19c-.86 0-1.748-.084-2.66-.25-.91-.167-1.68-.358-2.306-.574V.118zm2.91 19.105c.352.118.73.2 1.13.25.403.05.82.073 1.25.073.725 0 1.397-.112 2.014-.338.617-.225 1.15-.568 1.602-1.028.45-.46.808-1.05 1.073-1.764.264-.715.396-1.563.396-2.542 0-1.627-.285-2.89-.853-3.792-.568-.902-1.51-1.352-2.822-1.352-.45 0-.896.073-1.337.22-.44.147-.848.382-1.22.706-.372.323-.67.754-.896 1.293-.226.538-.338 1.19-.338 1.954v6.32zM118.25 22.015c-1.177 0-2.206-.2-3.087-.602-.882-.402-1.617-.955-2.205-1.66-.588-.706-1.024-1.54-1.308-2.5-.284-.96-.426-1.998-.426-3.115 0-1.117.142-2.155.426-3.116.284-.96.72-1.793 1.308-2.498.588-.705 1.323-1.264 2.205-1.675.88-.413 1.91-.62 3.086-.62 1.175 0 2.203.207 3.085.62.882.41 1.617.97 2.205 1.674.587.705 1.023 1.538 1.308 2.498.284.96.426 2 .426 3.116 0 1.117-.142 2.156-.426 3.116-.285.96-.72 1.793-1.308 2.498-.588.706-1.323 1.26-2.205 1.66-.882.403-1.91.603-3.086.603zm0-2.322c1.35 0 2.35-.49 2.997-1.47.647-.98.97-2.34.97-4.085 0-1.744-.323-3.1-.97-4.07-.647-.97-1.646-1.456-2.998-1.456-1.353 0-2.348.485-2.985 1.455-.636.97-.955 2.327-.955 4.07 0 1.745.32 3.107.955 4.087.637.98 1.632 1.47 2.984 1.47zM135.21 22.015c-1.177 0-2.206-.2-3.088-.602-.88-.402-1.616-.955-2.204-1.66-.588-.706-1.024-1.54-1.308-2.5-.284-.96-.426-1.998-.426-3.115 0-1.117.142-2.155.426-3.116.284-.96.72-1.793 1.308-2.498.588-.705 1.323-1.264 2.204-1.675.882-.413 1.91-.62 3.087-.62 1.174 0 2.203.207 3.085.62.882.41 1.617.97 2.204 1.674.587.705 1.023 1.538 1.307 2.498.285.96.427 2 .427 3.116 0 1.117-.142 2.156-.427 3.116-.284.96-.72 1.793-1.308 2.498-.588.706-1.323 1.26-2.205 1.66-.882.403-1.91.603-3.086.603zm0-2.322c1.35 0 2.35-.49 2.997-1.47.646-.98.97-2.34.97-4.085 0-1.744-.324-3.1-.97-4.07-.647-.97-1.646-1.456-2.998-1.456-1.353 0-2.348.485-2.985 1.455-.637.97-.955 2.327-.955 4.07 0 1.745.318 3.107.955 4.087.637.98 1.632 1.47 2.984 1.47zM145.937.118c.216-.04.456-.07.72-.09.265-.018.505-.028.72-.028.216 0 .46.01.735.03.275.02.52.048.735.088v21.545c-.215.04-.46.068-.735.088-.274.02-.52.03-.735.03-.215 0-.455-.01-.72-.03-.264-.02-.504-.048-.72-.087V.118zm3.704 13.726l4.792-7.26c.255-.04.51-.07.764-.088.255-.02.52-.03.794-.03.294 0 .573.01.837.03.265.02.534.05.81.088l-4.792 7.054 5.614 8.025c-.276.04-.54.068-.795.088-.255.02-.52.03-.794.03-.273 0-.547-.01-.822-.03-.274-.02-.548-.048-.823-.087l-5.584-7.82z"/></g></svg>

                <h4>Follow us</h4>

                <div className="f-social-links">
                <a href="https://twitter.com/culturebook"><svg width="24" height="24" viewBox="0 0 24 24"><title>Twitter</title><path d="M19.4 8.26c-.08 6.57-4.28 11.07-10.55 11.35-2.6.12-4.46-.7-6.1-1.74 1.92.3 4.3-.46 5.55-1.54-1.88-.2-2.98-1.14-3.5-2.67.54.1 1.1.07 1.62-.04-1.7-.56-2.9-1.6-2.95-3.8.47.22.96.43 1.63.46-1.27-.7-2.2-3.34-1.14-5.1C5.84 7.25 8.1 8.92 11.8 9.15 10.9 5.17 16.17 3 18.37 5.68c.93-.18 1.7-.54 2.42-.92-.3.92-.88 1.57-1.58 2.1.77-.12 1.46-.3 2.04-.6-.35.75-1.15 1.43-1.83 2z"></path></svg></a>
                <a href="https://instagram/"><svg width="24" height="24" viewBox="0 0 24 24"><title>Instagram</title><path d="M18.9 8.05c0 .27-.2.5-.48.5h-2.47c-.27 0-.5-.23-.5-.5V5.58c0-.27.23-.5.5-.5h2.47c.27 0 .5.23.5.5v2.47zm0 10.37c0 .27-.2.5-.48.5H5.58c-.27 0-.5-.23-.5-.5v-7.9h1.7c-.14.47-.2.97-.2 1.48 0 3 2.42 5.43 5.42 5.43S17.43 15 17.43 12c0-.5-.07-1-.2-1.48h1.68v7.9zM12 8.54c1.9 0 3.46 1.55 3.46 3.46 0 1.9-1.55 3.46-3.46 3.46-1.9 0-3.46-1.55-3.46-3.46 0-1.9 1.55-3.46 3.46-3.46zm6.42-5.43H5.58C4.22 3.1 3.1 4.23 3.1 5.6v12.84c0 1.36 1.12 2.47 2.48 2.47h12.84c1.36 0 2.47-1.12 2.47-2.48V5.58c0-1.36-1.12-2.47-2.48-2.47z"></path></svg></a>
                </div>

                </section>

            </footer>

    )

}

export default Footer;