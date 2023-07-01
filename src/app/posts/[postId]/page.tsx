import Link from 'next/link';

interface EditParams {
        postId: number
}
export default function postPage(props: EditParams) {
    const postId = props.postId;
    return (
        <>
            <h1>It's post {postId}</h1>
            <Link className='btn' href={`/posts/${postId}/edit`}>Edit</Link>
            <button className='btn-red'>Delete</button>
        </>
    )
}