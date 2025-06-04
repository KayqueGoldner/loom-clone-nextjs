import { dummyCards } from "@/constants";
import { Header } from "@/components/header";
import VideoCard from "@/components/video-card";
import { getAllVideos } from "@/lib/actions/video";
import { EmptyState } from "@/components/empty-state";

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { pagination, videos } = await getAllVideos(
    query,
    filter,
    Number(page) || 1,
  );

  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      {videos.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              {...video}
              thumbnail={video.thumbnailUrl}
              userImg={user?.image || ""}
              username={user?.name || "Guest"}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No videos found"
          description="Try adjusting your search"
        />
      )}
    </main>
  );
};

export default Page;
