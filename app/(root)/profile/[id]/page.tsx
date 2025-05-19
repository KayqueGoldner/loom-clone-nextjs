import { dummyCards } from "@/constants";
import { Header } from "@/components/header";
import VideoCard from "@/components/video-card";

const ProfileIdPage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        title="Kayque Goldner"
        subHeader="mail@example.com"
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default ProfileIdPage;
