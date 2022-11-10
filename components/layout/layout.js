import {Menu} from "../config/menu"
import { ActiveMenu } from "../config/activeMenu"
import {Footer} from "../config/footer"
import {Hamburger} from "../config/hamburger"

export default function Layout({ children }) {
    return (
    <>
        <ActiveMenu>
            <Menu/>
            <Hamburger/>
        </ActiveMenu>
        <main>
          {children}
        </main>
        <Footer />
    </>
    );
  }