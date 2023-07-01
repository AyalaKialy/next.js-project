import Link from 'next/link';
import Image from 'next/image';

interface postCardProps {
        postId: string
    
}

export default function PostCard(props: postCardProps) {
    const postId = props.postId;
    const text = 'fdxvff trhetd rhdr';
    return (
      <li className="rounded-lg shadow-lg bg-neutral-500">
        <Link href={`/posts/${postId}`}>
          <Image className="rounded-t-lg" src={`https://fakeimg.pl/600x400`} width="600" height="400" alt={postId} />
          <div className="p-4">
            <h4 className="text-xl text-neutral-50 font-medium">{postId}</h4>
            {/* <p className="text-neutral-300">{body.slice(0, 50)}</p> */}
          </div>
        </Link>
      </li>
    );
  }
  
  
  
  
  
  
  
  