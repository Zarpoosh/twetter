import Sidbar from "../../components/Sidbar";
import Feed from "../../components/Feed";
import Widgets from "../../components/Widgets";
// interface Props{
//   tweets:Tweet[];
// }

export default function Home() {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen ">
      <main className="grid grid-cols-9">
        {/* sidebar */}
        <Sidbar />

        {/* feed */}
        <Feed />

        {/* widgets */}
        <Widgets />
      </main>
    </div>
  );
}
