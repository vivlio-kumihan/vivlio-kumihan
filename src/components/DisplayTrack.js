import { BsMusicNoteBeamed } from 'react-icons/bs';

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds
  }
  return (
    <>
      <audio
        src={currentTrack.src} 
        ref={audioRef} 
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />

      <div className="audio-info">
        <div className="audio-image">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="song-info">
          <p>{currentTrack.author}</p>
          <p className="title">{currentTrack.title}</p>
        </div>
      </div>
    </>
  );
};

export default DisplayTrack;