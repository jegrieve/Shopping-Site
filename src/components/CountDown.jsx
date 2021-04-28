import React, {useEffect, useState} from 'react';

const CountDown = (props) => {
    const getTimeLeft = () => {
        let date = new Date();
        let hours = (date.getHours() === 24 ? 24 - date.getHours() : 23 - date.getHours());
        let min = 60 - date.getMinutes();
        let sec = 60 - date.getSeconds();
        return `${hours}:${min}:${sec}`;
    }

    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    useEffect(() => {
        const timer=setTimeout(() => {
            setTimeLeft(getTimeLeft());
          }, 1000);
          return () => clearTimeout(timer);
    })



    // useEffect(() => {
    //     setCurrentTime(props.currentTime)
    // }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //       setTimeLeft(calculateTimeLeft());
    //     }, 1000);
    // useEffect(() => {

    // })


    // var d = new Date();
    // var hours = 24 - d.getHours();
    // var min = 60 - d.getMinutes();

//     var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
// var now = new Date().getTime();
// var timeleft = countDownDate - now;
    
// var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    

  return <div>{timeLeft}</div>;
};

export default CountDown;
