
function Emojis({emoji}){
    return <span>{emoji}</span>;
}

function TimeToRead({minutes}){
    if (minutes<30){
        const value = (minutes%5)? ((minutes/5)+1):(minutes/5);
        let emojis=[];
        for(let i=0; i<value;i++){
            emojis.push(<Emojis key={i} emoji="☕️" />)
        }
        return <span>{emojis} {minutes} min read</span>;
    }
    else{
        const value = (minutes%10)? ((minutes/10)+1):(minutes/10);
        let emojis=[];
        for(let i=0; i<value;i++){
            emojis.push(<Emojis key={i} emoji="🍱" />)
        }
        return <span>{emojis} {minutes} min read</span>;
    }
}

export default TimeToRead;