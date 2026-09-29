import TileGrid from "../components/TileGrid";
import PublicationsPreview from "../components/PublicationsPreview";
import homeTiles from "../data/homeTiles.json";

export default function Home() {
  return (
    <div className="page page-home">
      <div className="home-layout">
        <div className="home-main">
          <TileGrid heading="Projects" tiles={homeTiles.projectsPreview} />
          <TileGrid heading="Cores" tiles={homeTiles.cores} />
        </div>
        <PublicationsPreview />
      </div>
    </div>
  );
}
