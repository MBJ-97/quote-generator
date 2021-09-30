import {useParams} from 'react-router-dom';



export default function SharedQuote() {

    const {id} = useParams();

        var f = id;
        var e = f.split('+').join(' ')

        

    return (
        <div className="app">
            <div className="card">
                <black>A wise man once said ...</black>
                <h2 className="heading">"{e}"</h2>
            </div>
        </div>
    )
}
