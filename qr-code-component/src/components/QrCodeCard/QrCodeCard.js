import React from "react";
import './QrCodeCard.css';


const QrCodeCard = (prop) =>{

    return(

        <div className="qr-code-card-container">
            <div className="qr-code-card-content">
                <div className="qr-code-image-container">
                    <img src={prop.qrCodeImagePath} alt="QrCode image" />
                </div>
                <div className="qr-code-description-container">
                    <div className="qr-code-title-container">
                        <span className="qr-code-title">{prop.qrCodeTitle}</span>
                    </div>
                    <div className="qr-code-subtitle-container">
                        <p className="qr-code-description">{prop.qrCodeDescription}</p>
                    </div>
                </div>
            </div> 
        </div>
        
    );

}


export default QrCodeCard;