import io from "socket.io-client";
import config from "../config";

const socket = io(window.location.origin);

export default socket;
