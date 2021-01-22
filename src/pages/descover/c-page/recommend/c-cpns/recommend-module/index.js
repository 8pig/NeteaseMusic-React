import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Slider } from 'antd';

//  `https://music.163.com/song/media/outer/url?id=167876.mp3`
import {

} from './style';
import { getAlbumActon } from "../../store/actionCreators";

function RecommendModule(props) {
    const player = useRef();
    const dispatch = useDispatch();
    const [playState, setPlayState] = useState(true);
    const [isSing, setIsSing] = useState(true);
    const [sliderProcess, setsliderProcess ] = useState(0);
    const [currentTime, setCurrentTime ] = useState(0)
    const [dt, setDt ] = useState(0);



    const { albums } = useSelector(state => ({
        albums: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    useEffect(() => {
        player.current.src = 'https://music.163.com/song/media/outer/url?id=167876.mp3';
        player.current.play();
        dispatch(getAlbumActon());
    }, [getAlbumActon]);
    const onUpdate= useCallback((e) => {
        if(isSing){
            setsliderProcess(e.target.currentTime  / e.target.duration * 100)
            setCurrentTime(currentTime )
            setDt(e.target.duration)
        }
    }, [sliderProcess])
    const playHander = () => {
        if(playState){
            player.current.pause();
            setPlayState(false)
        }else {
            player.current.play();
            setPlayState(true)
        }
    }
    function onChange(value) {
        console.log('onChange: ', value);
        setsliderProcess(value)
        setIsSing(false)
    }
    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
        setsliderProcess(value)
        setIsSing(true)
    }

    return (
        <div className="wrap-v2">
            <button onClick={e => playHander(e)}>
                {
                    playState ? '暂停' : '播放'
                }
            </button>
            <Slider
                defaultValue={0}
                value={sliderProcess}
                onChange={onChange}
                onAfterChange={onAfterChange}
                tooltipVisible
            />
            <audio ref={player}
                   onTimeUpdate={e => onUpdate(e)}
            />
        </div>
    )
}
export default memo(RecommendModule)
