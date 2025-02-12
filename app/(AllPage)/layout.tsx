import Navbar from './component/Navbar1';
import { ReactNode } from "react";

const layout = ({children}: { children: ReactNode }) => {
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