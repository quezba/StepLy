import { ArrowLeftToLine, Play, ArrowRightToLine }  from 'lucide-react';

export default function ButtonBar() {
    return (
        <div className='buttonBarContainer'>
            <button className='buttonBar'><ArrowLeftToLine/></button>
            <button className='buttonBar'><Play/></button>
            <button className='buttonBar'><ArrowRightToLine/></button>
        </div>
    )
}