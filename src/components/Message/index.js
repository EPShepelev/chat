import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Time, IconRead } from "../";
import "./Message.scss";
import waveSvg from "assets/img/wave.svg";
import playSvg from "assets/img/play.svg";
import pauseSvg from "assets/img/pause.svg";
import { convertCurrentTime } from "utils/helpers";

const Message = ({
  avatar,
  user,
  text,
  audio,
  date,
  isMe,
  isRead,
  attachments,
  isTyping,
}) => {
  const [isPaly, setIsPaly] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioElem = useRef(null);
  useEffect(() => {
    audioElem.current.volume = "0.2";
    audioElem.current.addEventListener(
      "playing",
      () => {
        setIsPaly(true);
      },
      false
    );
    audioElem.current.addEventListener(
      "ended",
      () => {
        setIsPaly(false);
        setProgress(0);
      },
      false
    );
    audioElem.current.addEventListener(
      "pause",
      () => {
        setIsPaly(false);
      },
      false
    );
    audioElem.current.addEventListener("timeupdate", () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  const togglePaly = () => {
    if (!isPaly) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--istyping": isTyping,
        "message--image": attachments && attachments.length === 1,
        "message--is-audio": audio,
      })}
    >
      <div className="message__content">
        {/* <IconRead isMe={isMe} isRead={isRead} /> */}
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span className="dot one"></span>
                  <span className="dot two"></span>
                  <span className="dot three"></span>
                </div>
              )}
              {audio && (
                <div className="message__audio">
                  <audio ref={audioElem} src={audio} preload="auto" />
                  <div
                    className="message__audio-progress"
                    style={{ width: progress + "%" }}
                  ></div>
                  <div className="message__audio-info">
                    <div className="message__audio-btn">
                      <button onClick={togglePaly}>
                        {isPaly ? (
                          <img src={pauseSvg} alt="pause audio"></img>
                        ) : (
                          <img src={playSvg} alt="play audio"></img>
                        )}
                      </button>
                    </div>
                    <div className="message__audio-svg">
                      {" "}
                      <img src={waveSvg} alt="audio wave image"></img>
                    </div>
                    <span className="message__audio-duration">
                      {convertCurrentTime(currentTime)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}
          {date && (
            <span className="message__date">
              <Time date={new Date()} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Message1 = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isRead,
  attachments,
  isTyping,
}) => (
  <div
    className={classNames("message", {
      "message--isme": isMe,
      "message--istyping": isTyping,
      "message--image": attachments && attachments.length === 1,
    })}
  >
    <div className="message__content">
      <IconRead isMe={isMe} isRead={isRead} />
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
      </div>
      <div className="message__info">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span className="dot one"></span>
                <span className="dot two"></span>
                <span className="dot three"></span>
              </div>
            )}
          </div>
        )}
        <div className="message__attachments">
          {attachments &&
            attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        {date && (
          <span className="message__date">
            <Time date={<Time date={new Date()} />} />
          </span>
        )}
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isRead: PropTypes.bool,
  isMe: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
