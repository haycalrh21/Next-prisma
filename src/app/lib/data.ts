import {prisma} from '@/app/lib/db'

export const coklogi = async () =>{
    try {
        const posts = await prisma.post.findMany()
        return posts
    }catch (error) {
        console.log(error)
    }
}