'use client'
import { useState } from 'react';

export default function PostForm() {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    return (
        <form className='w-full max-w-sm'>
            <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                    <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                    >
                        Title
                    </label>
                </div>
                <div className='md:w-2/3'>
                    <input className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500' id='title' type='text' placeholder='Enter title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                    <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        Body
                    </label>
                </div>
                <div className='md:w-2/3'>
                    <input className='bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500' id='body' type='text' placeholder='Enter body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)} />
                </div>
            </div>
            <div className='md:flex md:items-center'>
                <div className='md:w-1/3'></div>
                <div className='md:w-2/3'>
                    <button className='btn' type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}