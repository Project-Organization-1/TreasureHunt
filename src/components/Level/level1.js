import React, { useContext, useEffect, useMemo, useState } from 'react'
import ClueComponent from './Clue/ClueComponent';
import SubmitBoxComponent from './SubmitBox/SubmitBoxComponent';
import ImageComponent from './Image/ImageComponent';
import VideoComponent from './Video/VideoComponent';
import { UserContext } from '../UserContext';
import jwt_decode from "jwt-decode";
import socketIOClient from "socket.io-client"
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
const ENDPOINT = "http://localhost:5000/"

function Level1() {

    function decodeJWT() {
        var token = window.localStorage.getItem("token")
        var decoded = jwt_decode(token);
        console.log(decoded);
        return decoded;
    }

    function joinRoom() {
        console.log('joining room');
        socket.emit('join-room', {
            room: decodeJWT().groupId
        });
        setHasJoinedRoom(true);
    }

    function leaveRoom() {
        console.log('leaving room with id' + socket.id)
        socket.emit('leave-room', {room : decodeJWT().groupId})
        setHasJoinedRoom(false)
    }

    const imgPath = "/images/camp-karnala-1.jpeg";
    const videourl = "https://www.youtube.com/embed/REWoh-3yt28";
    const clue = "Level1";

    const { token, setToken } = useContext(UserContext);

    // Count of number of members in the current room
    const [count, setCount] = useState(0);
    const [hasJoinedRoom, setHasJoinedRoom] = useState(false);

    const socket = socketIOClient(ENDPOINT, { query: `loggedUser=${token}` });

    useEffect(() => {
        if (hasJoinedRoom) {
            console.log("has joined room")
            socket.on('set-count', data => {
                console.log(data);
                setCount(data);
            })
        }
    }, []);

    return (
        <div>
            <SubmitBoxComponent />
            {!hasJoinedRoom && <Button onClick={() => joinRoom()}>Join Room</Button>}
            {hasJoinedRoom && <Button onClick={() => leaveRoom()}>Leave Room</Button>}
            {hasJoinedRoom && <div>{`${count} users are connected`}</div>}
            <ImageComponent imgPath={imgPath} />
            <ClueComponent clue={clue} />
            <VideoComponent videourl={videourl} />
        </div>
    )
}

export default Level1;