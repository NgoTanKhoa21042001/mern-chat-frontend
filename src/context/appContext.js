import { io } from "socket.io-client";
import React from "react";
const SOCKET_URL = "http://localhost:5002";
export const socket = io(SOCKET_URL);

// app content

export const AppContext = React.createContext();
