import MistlightHero from "./assets/MistlightHero.webp";
import TheBasics_ph from "./assets/TheBasics_ph.webp";
import Goldilocks_Sketches from "./assets/Goldilocks_Sketches.webp";
import ProjectWisp_ph from "./assets/ProjectWisp_ph.webp";
import FreshlyFrosted_ss01 from "./assets/FreshlyFrosted_ss01.webp";
import MistlightLogotype from "./assets/MistlightLogotype.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="relative hero bg-[#2c2b44]">
        <img src={MistlightHero} />
        <img src={MistlightLogotype} className="max-w-1/2" />
        <div className="hero-content text-white absolute bottom-1/12">
          <p className="text-end">Game Development Studio</p>
        </div>
      </div>
      <div>
        <h1 className="pt-6">Projects</h1>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={TheBasics_ph} className="max-w-105 rounded-lg shadow-md " />
          <div className="mx-4 text-left">
            <h2>The Basics</h2>
            <p className="italic pb-3">Video Game - In Development</p>
            <div>
              <p>
                A mini game collection designed to get you from complete
                beginner to comfortable gamer.
              </p>
              <p className="py-6">
                The goal is to ease the path into gaming, while the player tries
                a buffet of game genres along the way! They get the chance to
                build skills and learn what they like.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Goldilocks_Sketches}
            className="max-w-105 rounded-lg shadow-md"
          />
          <div className="mx-4 text-left">
            <h2>Goldilocks</h2>
            <p className="italic pb-3">Card Game - In Development</p>
            <div>
              <p>
                A trick taking game for three; who can pick the card that's just
                right?
              </p>
              <p className="py-6">
                Picking the middle-est card is easy... until the bears come
                home. Each bear has their own preferences, and Goldilocks has
                tricks of her own. This game is designed to be playable with any
                deck of cards, while the custom deck features lovely themed art
                that keeps your head in the game.
              </p>
              <p className="italic">
                Developed in with partnership with Harry of Small Key.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={ProjectWisp_ph}
            className="max-w-105 rounded-lg shadow-md"
          />
          <div className="mx-4 text-left">
            <h2>Project Wisp</h2>
            <p className="italic pb-3">Board Game - In Development</p>
            <div>
              <p>
                Select your themes, build your story deck, and get lost in the
                forest as the cards DM you through a three act table top RPG.
              </p>
              <p className="py-6">
                Themed packs combine in interesting ways to build unique fantasy
                adventures. Collaborate with your friends to find your way out
                of the forest, or get immersed in the joys and troubles of those
                who call it their home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={FreshlyFrosted_ss01}
            className="max-w-105 rounded-lg shadow-md"
          />
          <div className="mx-4 text-left">
            <h2>Freshly Frosted</h2>
            <p className="italic pb-3">Video Game - Released 2022</p>
            <div>
              {" "}
              <p>
                Place conveyor belts to solve puzzles in the world's most
                adorable donut factory!
              </p>
              <p className="py-6">
                144 levels of ultra-satisfying donut puzzles, with satisfying
                beats and a relaxed narrator to keep you company. This game
                starts as a sweet and simple puzzler that ramps up to more
                complex complexion as you work your way through a dozen dozen
                levels!
              </p>
              <a
                href="https://store.steampowered.com/app/1070790/Freshly_Frosted/"
                className="btn md:btn-md btn-outline"
              >
                Freshly Frosted on Steam
              </a>
              <p className="italic py-6 ">
                Developed in partnership with Amanda End and Ty Taylor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider py-15">End</div>
    </>
  );
}

export default App;
