import Navbar from './component/Navbar1';
import homePage from './home/page';
const layout = ({children}) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout