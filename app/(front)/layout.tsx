import Navbar from "./navbar"
import "../globals.css"
export default function Layout({ children }: any) {
    return (
        <html lang="en" data-theme={"light"}>
            <body>
             <Navbar />   

                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
