import classes from './TranscriptionView.module.css';

function TranscriptionView() {
    return (
        <div className={classes.control}>
            <h1> 오늘의 필사구문 </h1>
            <p>
                필사는 더욱 깊은 독서를 도우며, 글쓰기를 간접으로 경험할 수 있게 만든다.
            </p>
        </div>
    )
    
}

export default TranscriptionView;