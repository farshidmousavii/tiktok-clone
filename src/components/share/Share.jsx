import styles from "./share.module.css";
import {
  Email,
  Embeded,
  Facebook,
  Friends,
  Whatsapp,
  LinkShare,
  Twitter,
  Telegram,
  Linkdin,
  Reddit,
  Pinterest,
  Line,
  Arrow,
} from "../icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Share = ({ show, handleShow }) => {
  const [open, setOpen] = useState(false);
  const handleCilck = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <div className={show ? styles.shareContainer : styles.hide}>
      <div className={styles.shareWrapper} onMouseLeave={handleShow}>
        <Link to="#">
          <Embeded />
          <span>Embed</span>
        </Link>
        <Link to="#">
          <Friends />
          <span>Send to friends</span>
        </Link>
        <Link to="#">
          <Whatsapp />
          <span>Share to WhatsApp</span>
        </Link>
        <Link to="#">
          <Facebook />
          <span>Share to Facebook</span>
        </Link>
        <Link to="#">
          <LinkShare />
          <span>Copy link</span>
        </Link>
        <Link
          to=""
          onClick={(e) => handleCilck(e)}
          className={open ? styles.hidden : styles.arrow}
        >
          <Arrow />
        </Link>
        {open && (
          <>
            <Link to="#">
              <Twitter />
              <span>Share to Twitter</span>
            </Link>
            <Link to="#">
              <Telegram />
              <span>Share to Telegram</span>
            </Link>
            <Link to="#">
              <Linkdin />
              <span>Share to LinkdIn</span>
            </Link>
            <Link to="#">
              <Reddit />
              <span>Share to Reddit</span>
            </Link>
            <Link to="#">
              <Pinterest />
              <span>Share to Pinterest</span>
            </Link>
            <Link to="#">
              <Line />
              <span>Share to Line</span>
            </Link>
            <Link to="#">
              <Email />
              <span>Share to Email</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Share;
