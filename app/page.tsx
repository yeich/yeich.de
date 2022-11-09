import '../styles/globals.css'

export default function HomePage() {
    return (
        <div className="container">
            <div className="card">
                {/*<div className="card-image">*/}
                {/*    <Image src="/images/me.png" alt="Yannick Eich" width={433} height={577}/>*/}
                {/*</div>*/}
                <div className="card-loading">
                    <div className="card-loading-loader">
                        <h1>Yannick Eich</h1>
                        <span></span>
                    </div>
                </div>
                <div className="card-text">
                    <h2>Backend Developer</h2>
                    <p>JavaScript, PHP, Java</p>
                    <p style={{marginTop: '20px'}}>Website in Conception...</p>
                </div>
            </div>
        </div>
    );
}