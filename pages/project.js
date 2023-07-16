import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 5

const title = "Projects"
const path = 'all/project';
const ref = "project";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(path)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    path: ref
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Project({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`All Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={`All ${title}`}
      />
    </>
  )
}
