import PageContainer from "../../components/Common/Shared/page-container";
import GameContainer from "./game-container";

export const metadata = {
  title: "Benjamin - Games 🎮",
};

export const games = [
  {
    name: "Tic Tak Toe",
    url: "?game=tictaktoe",
  },
  {
    name: "Memorium",
    url: "?game=memorium",
  },
];

const Games = () => {
  return (
    <>
      <PageContainer>
        <main>
          <div className="md:max-w-[1024px] w-11/12 mx-auto my-10 section mt-28 md:mt-32">
            <h1 className="mb-8 text-4xl font-bold text-center md:text-start">
              Games 🎮<span className="text-primary">.</span>
            </h1>

            <section id="game_sect" className="mt-5">
              <GameContainer games={games} />
            </section>
          </div>
        </main>
      </PageContainer>
    </>
  );
};

export default Games;
