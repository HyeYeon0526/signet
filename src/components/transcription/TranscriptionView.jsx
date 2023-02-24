import classes from './TranscriptionView.module.css';

function TranscriptionView() {
    const transcription = [
        "필사는 더욱 깊은 독서를 도우며, 글쓰기를 간접으로 경험할 수 있게 만든다.",
        "그날은 참 죽기 좋은 날 같았다. 죽어서 평생 어깨에 짊어졌던 근심 걱정을 모두 벗어버리고 편안히 누워 하나님의 창조물 중에서 가장 좋은 것들을 즐길 수 있게 된다면, 그렇게 하기에 딱 좋은 날이었다는 뜻이다. 대기는 따스했고 바람 한 점 없었으며, 거스 삼촌이 늘 물을 주고 잘 깎아놓은 묘지의 잔디는 연초록의 카펫처럼 펼쳐져 있었다. 그리고 하늘을 담은 강물은 기다란 파란색 리본처럼 구불거리며 흘러가고 있었다. 내가 죽으면 바로 이런 곳에 누워 이런 풍경을 보고 싶다는 생각이 들었다. - 철로 된 강물처럼, 윌리엄 켄트 크루거",
        "예의 바른 악수를 위해 손을 잡았다 놓으면 손바닥에 칼날이 쓱 베여 있다. 상처의 모양을 물끄러미 들여다보다가 누구든 자신의 칼을 생각하게 된다. - 상냥한 폭력의 시대, 정이현",
        "나는 별수없이 또 사랑이란 소리를 강조하면서 그와 나 사이엔 암만해도 깐 낱말이 필요하다고 느꼈다. 아무도 안 써본 슬프고 진한 어휘가. - 나목, 박완서",
        "나름의 아픔이 있지만 정신적 사회적으로 양지바른 곳의 사람들, 이끼류 같은 것 돋아날 드팀새도 없이 확고부동한 햇발 아래 뿌리내린 사람들을 응시하는 행위가 좋다. 오래도록 바라보는 것으로 그것을 소유할 수 있다면. 언감생심이며 단 한순간이라도 스 장면에 속한 인간이 된 듯한 감각을 누릴 수 있다면."
    ]

    const getRandomIndex = function (length){
        return parseInt(Math.random() * length)
    }

    return (
        <div className={classes.control}>
            <h1 className={classes.text_design}> transcription </h1>
            <p className={classes.text_design}>
                {transcription[getRandomIndex(transcription.length)]}
            </p>
            <button> 저장 </button>
            <button> ❤️ </button>
        </div>
    )
    
}

export default TranscriptionView;