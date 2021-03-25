import React, { useContext, useEffect, useMemo, useState } from 'react'
import ClueComponent from './Clue/ClueComponent';
import SubmitBoxComponent from './SubmitBox/SubmitBoxComponent';
import ImageComponent from './Image/ImageComponent';
import VideoComponent from './Video/VideoComponent';
import { UserContext } from '../UserContext';
import jwt_decode from "jwt-decode";
import io from "socket.io-client";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { blueGrey } from '@material-ui/core/colors';
const ENDPOINT = "http://localhost:5000/"

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Level1() {
    const imgPath = "/images/camp-karnala-1.jpeg";
    const videourl = "https://www.youtube.com/embed/REWoh-3yt28";
    const clue = "Level1";

    const { token, setToken } = useContext(UserContext);
    const [roomSize, setRoomSize] = useState(0)
    const [socket, setSocket] = useState();
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState({})

    useEffect(() => {
        function decodeJWT() {
            var token = window.localStorage.getItem("token")
            var decoded = jwt_decode(token);
            return decoded;
        }

        const newSocket = io(
            ENDPOINT,
            { query: `loggedUser=${decodeJWT().email}&groupId=${decodeJWT().groupId}` }
        )

        setSocket(newSocket)

        newSocket.on('you-joined-room', (roomName, size) => {
            console.log(`You joined room ${roomName}`)
            setMessage({
                info : `You joined room ${roomName}`,
                severity : 'success'
            })
            setRoomSize(size);
            setOpen(true);
        })

        newSocket.on('member-joined-room', (email, roomName, socketId, size) => {
            console.log(`${email} joined room ${roomName} with socket id ${socketId}`)
            setMessage({
                info : `${email} joined room ${roomName}`,
                severity : 'success'
            })
            setRoomSize(size);
            setOpen(true);
        })

        newSocket.on('member-disconnected', (email, size) => {
            console.log(`${email} disconnected`)
            setMessage({
                info : `${email} disconnected`,
                severity : 'error'
            })
            setRoomSize(size);
            setOpen(true);
        })

        newSocket.on('room-left', (email, roomName, size) => {
            console.log(`${email} left room ${roomName}`)
            setMessage({
                info : `${email} left room ${roomName}`,
                severity : 'error'
            })
            setRoomSize(size);
            setOpen(true);
        })

        return () => {
            newSocket.off('you-joined-room');
            newSocket.off('member-joined-room');
            newSocket.off('member-disconnected');
            newSocket.off('room-left');
            newSocket.close();
        }
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <div className="room-container" style={{backgroundColor: 'black', justifyContent: 'center', display: 'flex', padding: '10px'}}>
                <div style={{color: 'white'}}>{`Room size : ${roomSize}`}</div>
            </div>
            {/* <SubmitBoxComponent />
            <ImageComponent imgPath={imgPath} />
            <ClueComponent clue={clue} />
            <VideoComponent videourl={videourl} /> */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.severity}>
                    {message.info}
                </Alert>
            </Snackbar>

        </div>
    )
}

export default Level1;