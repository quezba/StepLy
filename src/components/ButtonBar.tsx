import { ArrowLeftToLine, Play, ArrowRightToLine }  from 'lucide-react';

export default function ButtonBar() {
    return (
        <div className='fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-around w-1/2 border border-[#C6C6C6] rounded-2xl py-2'>
            <button className='buttonBar'><ArrowLeftToLine/></button>
            <button className='buttonBar'><Play/></button>
            <button className='buttonBar'><ArrowRightToLine/></button>
        </div>
    )
}