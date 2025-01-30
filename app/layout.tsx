import Navbar from "@/component/Navbar";
import './globals.css';

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