// import individual components
import TitleBar from "../components/individual/titleBar";
import CustomLink from "../components/individual/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <TitleBar
        props={{
          imgPath: '/images/app-icon.jpeg',
          title: "Welcome To Mek's Hub 👋",
          subTitle: "A Diary App Designed With Your Security In Mind 😎",
        }} />

      <div className="flex flex-row items-center justify-evenly w-full flex-1 tracking-widest">
        <div class="grid grid-cols-2 gap-8">
          <div class="bg-bg2 border border-bdr shadow-lg p-6 rounded-lg hover:bg-hvr hover:shadow-2xl transition duration-300">
            <h2 class="text-3xl mb-4">📔 Create Your Diary</h2>
            <p class="text-lg">Start capturing your thoughts and experiences in a secure, easy-to-use digital diary designed with your privacy in mind.</p>
          </div>

          <div class="bg-bg2 border border-bdr shadow-lg p-6 rounded-lg hover:bg-hvr hover:shadow-2xl transition duration-300">
            <h2 class="text-3xl mb-4">🔒 Secure Your Entries</h2>
            <p class="text-lg">Your diary entries are encrypted and protected so you can write freely without worrying about security risks.</p>
          </div>

          <div class="bg-bg2 border border-bdr shadow-lg p-6 rounded-lg hover:bg-hvr hover:shadow-2xl transition duration-300">
            <h2 class="text-3xl mb-4">🎨 Personalize Themes</h2>
            <p class="text-lg">Make your diary truly yours by customizing its look with beautiful themes and layouts.</p>
          </div>

          <div class="bg-bg2 border border-bdr shadow-lg p-6 rounded-lg hover:bg-hvr hover:shadow-2xl transition duration-300">
            <h2 class="text-3xl mb-4">🕰️ View Your Memories</h2>
            <p class="text-lg">Relive cherished moments by browsing through your entries at any time and keep your memories alive.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full flex-shrink-0">
        <CustomLink props={{ link: "/auth/signup", text: 'Sign Up' }} />
        <CustomLink props={{ link: "/auth/login", text: 'Login' }} />
      </div>
    </div>
  );
};
