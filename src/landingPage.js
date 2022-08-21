
import TitleCard from "./lib/card/titleCard.js"
import client from './static/client.jfif'
import consultant from "./static/consultant1.png"
import vendor from "./static/vendor.png"
import Header from './header';
import Footer from './footer';

function LandingPage() {
  return (
    <div className="row">
      < Header />
      <div className="row m-4">
        <div className="col-4"><TitleCard
          title="Client" img={client}
          description="Client Portal" />
        </div>
        <div className="col-4"> <TitleCard title="Consultant" img={consultant}
          description="Consultant Portal" /></div>
        <div className="col-4"> <TitleCard title="Vendor" img={vendor}
          description="Vendor Portal" />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default LandingPage;
