function Card () {
    return (
        <div className="card">
            <div className="card--image">
                <img src="./images/a1.png" alt="a1.png" />
            </div>
            
            <div className="card--body">
                <p>
                    <span>
                        <img src="./images/icons/location.png" alt="" />
                    </span>
                    <span>
                        JAPAN
                    </span>
                    <span>
                        <a href="www.google.com">View on google Maps</a>
                    </span>
                </p>
                <h1>Mount Fuji</h1>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>

            </div>
        </div>
        
    )
}

export default Card;