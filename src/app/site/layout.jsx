export default function SiteLayout({children}){
    const siteLayoutStyle = {
        border: "solid black 2px"
    }
    return(
        <>
            <div style={siteLayoutStyle}>
                {children}
            </div>
        </>
    )
}