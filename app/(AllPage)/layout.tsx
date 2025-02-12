import Navbar from './component/Navbar1';
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