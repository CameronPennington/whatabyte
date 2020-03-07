import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => (
	<Layout>
		<br />
		<Link href="/explore">
			<a>Welcome to WHATABYTE!</a>
		</Link>
	</Layout>
);

export default Index;
