import { Header } from "@/components/header";

const ProfileIdPage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        title="Kayque Goldner"
        subHeader="mail@example.com"
        userImg="/assets/images/dummy.jpg"
      />
      <h1 className="font-karla text-2xl">ProfileIdPage: {id}</h1>
    </div>
  );
};

export default ProfileIdPage;
