import '../styles/globals.css'
import StyledComponentsRegistry from "./registry";

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}