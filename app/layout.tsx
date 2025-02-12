import './globals.css';
import { ReactNode } from "react";

const layout = ({children}: { children: ReactNode }) => {
  return (
    <html>
      
      <body>
        {children}
      </body>
    </html>
  )
}
export default layout