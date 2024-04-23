import './App.css';
import QrCodeCard from './components/QrCodeCard/QrCodeCard';
import qrCodeImage from './assets/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QrCodeCard
          qrCodeImagePath={qrCodeImage}
          qrCodeTitle="Improve your front-end skills by building projects"
          qrCodeDescription="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        />
      </header>
    </div>
  );
}

export default App;
