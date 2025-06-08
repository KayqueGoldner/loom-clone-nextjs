import { redirect } from "next/navigation";

import { Header } from "@/components/header";
import VideoCard from "@/components/video-card";
import { getAllVideosByUser } from "@/lib/actions/video";
import { EmptyState } from "@/components/empty-state";

const ProfileIdPage = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params;
  const { query, filter } = await searchParams;

  const { user, videos } = await getAllVideosByUser(id, query, filter);

  if (!user) {
    redirect("/404");
  }

  return (
    <div className="wrapper page">
      <Header
        title={user.name}
        subHeader={user.email}
        userImg={user.image ?? ""}
      />

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
          title="No videos available yet"
          description="Videos will show up once you upload them"
        />
      )}
    </div>
  );
};

export default ProfileIdPage;
