import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import './App.css';

function App() {
  const [audioBlobUrl, setAudioBlobUrl] = useState(null);

  return (
    <div className="app-container">
        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div className="content-container">
              <div className="audio-container">
              {mediaBlobUrl && (
                  <audio
                    src={mediaBlobUrl}
                    controls
                  />
                )}
              </div>
              <div className="button-container">
                <p>{status}</p>
                <button onClick={startRecording} disabled={status === 'recording'}>
                  Start Recording
                </button>
                <button onClick={stopRecording} disabled={status === 'idle'}>
                  Stop Recording
                </button>
              </div>
            </div>
          )}
          onStop={(blobUrl) => setAudioBlobUrl(blobUrl)}
        />
    </div>
  );
}

export default App;
