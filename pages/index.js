import Link from "next/link";
import CONSTANTS from "../data/constants";
import Layout from "../components/layouts/main";
import Header from "../components/layouts/header";

export default () => (
  <Layout title="Welcome">
    <Header title={"Welcome"} />
    <div>
      <p>
        It's late fall. The harvest was poor this year and you've been chosen to
        leave your village and got to {CONSTANTS.destination} to sell a{" "}
        {CONSTANTS.macguffin} of great value. The sale of this item will help
        your village make it through the coming winter.
      </p>
      <p>
        You've been given instructions to guard the {CONSTANTS.macguffin}{" "}
        carefullly, never leave the path and make a good bargain when you get to{" "}
        {CONSTANTS.destination}. There may be bandits on the road. You've been
        warned to stay alert.
      </p>
      <Link href="/story">
        <button>Begin</button>
      </Link>
    </div>
  </Layout>
);