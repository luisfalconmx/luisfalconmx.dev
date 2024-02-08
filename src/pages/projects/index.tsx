import { useState } from 'react'
import Image from 'next/image'
import SidebarLayout from '@/Layouts/SidebarLayout'
import CardProject from '@/components/CardProject'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import contentfulClient from '@/clients/contentfulClient'
import {
  GetProjectsDocument,
  GetProjectsQuery,
  GetProjectsQueryVariables,
  GetTagsQuery,
  GetTagsQueryVariables,
  GetTagsDocument
} from '@/generated/contentful.schema'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async () => {
  const client = contentfulClient()

  const response = await client.query<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >({
    query: GetProjectsDocument,
    variables: {
      limit: 6
    }
  })

  const responseTags = await client.query<GetTagsQuery, GetTagsQueryVariables>({
    query: GetTagsDocument
  })

  return {
    props: {
      projects: response.data.projectCollection?.items,
      tags: responseTags.data.technologyCollection?.items
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects({
  projects,
  tags
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [lastCursor, setLastCursor] = useState<string>('')
  const [hasNextPage, setHasNextPage] = useState<boolean>(false)
  const [extraProjectsList, setExtraProjectsList] = useState<typeof projects>(
    []
  )

  // const getMoreProjects = async () => {
  //   const client = githubClient()
  //   const response = await client.query<
  //     GetProjectsQuery,
  //     GetProjectsQueryVariables
  //   >({
  //     query: GetProjectsDocument,
  //     variables: {
  //       username: 'luisfalconmx',
  //       repositoriesCount: 6,
  //       after: lastCursor
  //     }
  //   })

  //   setLastCursor(response.data.user?.repositories.pageInfo.endCursor || '')

  //   setHasNextPage(
  //     response.data.user?.repositories.pageInfo.hasNextPage || false
  //   )

  //   setExtraProjectsList((prev) => [
  //     ...prev,
  //     ...(response.data.user?.repositories?.edges?.map((edge) => edge?.node) ||
  //       [])
  //   ])
  // }

  return (
    <SidebarLayout>
      <div className="mx-auto block h-full max-w-screen-xl border-r border-iron/40 py-8">
        <h1 className="mb-10 text-3xl font-bold !text-white">Projects</h1>

        <div className="grid gap-y-3 pr-4">
          {tags?.map((tag) => (
            <div
              className="cursor-pointer rounded-xl bg-onyx p-[2px] hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
              key={tag?.name}
            >
              <div className="flex items-center rounded-xl bg-onyx px-5 py-4">
                <Image
                  src={tag?.icon?.url || ''}
                  alt={tag?.name || ''}
                  width="24"
                  height="24"
                  className="mr-3"
                />
                <strong className="block text-lg">{tag?.name}</strong>
                <ArrowRightIcon className="ml-auto h-6 w-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <main className="mx-auto max-w-screen-xl py-4 pl-4">
        <div className="grid grid-cols-1 gap-y-6">
          {projects?.map((project) => (
            <CardProject
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.featuredImage?.url || ''}
              variant="card"
              tags={
                project?.technologiesCollection?.items?.map((i: any) => ({
                  icon: i.icon.url,
                  name: i.name
                })) || []
              }
            />
          ))}

          {/* {extraProjectsList?.map((project) => (
            <CardProject
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.openGraphImageUrl}
              variant="block"
              tags={project?.repositoryTopics.nodes?.map((i) =>
                i ? i.topic.name : ''
              )}
              licence={project?.licenseInfo?.name || ''}
              createdDate={project?.createdAt || ''}
              latestRelease={project?.latestRelease?.name || ''}
              primaryLanguage={project?.primaryLanguage?.name || ''}
            />
          ))} */}
        </div>

        {/* {hasNextPage && (
          <div className="flex justify-center">
            <Button
              variant="filled"
              onClick={getMoreProjects}
              className="flex items-center"
            >
              <ArrowPathIcon className="mr-2 h-6 w-6" />
              Load More
            </Button>
          </div>
        )} */}
      </main>
    </SidebarLayout>
  )
}
