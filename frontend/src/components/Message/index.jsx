import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import reactStringReplace from "react-string-replace";
import { Popover, Button } from "antd";
import { Emoji } from "emoji-mart";
import { Time, Avatar } from "..";

import { convertCurrentTime } from "utils/helpers";

import "./Message.scss";
import waveSvg from "assets/img/wave.svg";
import playSvg from "assets/img/play.svg";
import pauseSvg from "assets/img/pause.svg";

const MessageAudio = ({ audioSrc }) => {
  const audioElem = useRef(null);
  const [isPaly, setIsPaly] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePaly = () => {
    if (!isPaly) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

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
        setCurrentTime(0);
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

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto" />
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
  );
};

const Message = ({
  avatar,
  user,
  text,
  audio,
  date,
  isMe,
  read,
  attachments,
  isTyping,
  onRemoveMessage,
}) => {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--istyping": isTyping,
        "message--image": attachments && attachments.length === 1 && !text,
        "message--is-audio": audio,
      })}
    >
      <div className="message__content">
        <div className="message__avatar">
          <Popover
            content={
              <div>
                <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
              </div>
            }
            trigger="click"
          >
            <div className="message__icon-actions">
              <Button type="link" shape="circle" icon="ellipsis" />
            </div>
          </Popover>
          <Avatar user={user} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && (
                <p className="message__text">
                  {reactStringReplace(text, /:(.+?):g/, (match, i) => (
                    <Emoji emoji={match} set="apple" size={16} />
                  ))}
                </p>
              )}
              {isTyping && (
                <div className="message__typing">
                  <span className="dot one"></span>
                  <span className="dot two"></span>
                  <span className="dot three"></span>
                </div>
              )}
              {audio && <MessageAudio audioSrc={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, index) => (
                <div key={index} className="message__attachments-item">
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
