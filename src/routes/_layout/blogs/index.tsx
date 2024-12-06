import { createFileRoute } from '@tanstack/react-router'
import BlogLayout from "@/components/BlogLayout.tsx";
import {BlogPostCard,BlogPost} from "@/components/BlogPostCard.tsx";
import {useInfiniteQuery,} from "@tanstack/react-query";
import {fetchBlogs} from "@/service/blogs.ts";
import {Button} from "@/components/ui/button.tsx";


export const Route = createFileRoute('/_layout/blogs/')({
  component: RouteComponent,
})
function RouteComponent() {

  const { data, isLoading,isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: async ({ pageParam = 0 }) => fetchBlogs(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage +1 < lastPage.totalPages) {
        return lastPage.currentPage + 1; // Fetch the next page
      }
      return undefined; // No more pages to fetch
    },
  });

  if(isLoading){
    return <div className="text-center">Loading...</div>;
  }
  if(isError){
    return (<div className="text-center text-red-600">There was an error</div>)
  }

  return (
      <BlogLayout>
        <div className="space-y-2">
          {data?.pages?.map(page => {
            return page?.blogs.map((post: BlogPost) => {
              return <BlogPostCard post={post} key={post.id}/>
            })
          })}
        </div>
        <div className={"flex items-center justify-center"}>
          <Button
              className={"mt-4"}
              type={"button"}
              variant={"outline"}
              onClick={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              disabled={!hasNextPage}
          >
            Load more
          </Button>
        </div>

      </BlogLayout>
  )
}

