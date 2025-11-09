import ViewResume from "../Components/View-Resume";

const ResumePage = () => {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-white">
      <div className="space-y-6 text-center mb-12">
        <h1 className="text-4xl font-semibold mb-6 text-gray-500 sm:underline-offset-8">
          My Resume
        </h1>
      </div>
      <div>
        <ViewResume
          url={
            "https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub"
          }
        />
      </div>
    </div>
  );
};

export default ResumePage;
