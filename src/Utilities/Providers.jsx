import SessionProvider from "./SessionProvider";
import CommonDataProvider from "./CommonDataProvider";

export default Providers;
const Providers = ({children}) => {
	return <SessionProvider>
		<CommonDataProvider>
			{children}
		</CommonDataProvider>
	</SessionProvider>
}