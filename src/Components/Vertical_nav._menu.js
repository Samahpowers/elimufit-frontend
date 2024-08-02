import logo from "../favicon.png"
const VerticalnavMenu = ()=>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light vh-100 d-flex flex-column align-items-start text-white" style={{ backgroundColor: 'purple', margin: '0', padding: '0', overflowY: 'auto' }}>
        <img src={logo} alt="logo" className="mt-2 w-50 justify-items-center" />
        <h3 className="text-white mt-5" style={{ opacity: 0.8 }}>Elimufiti</h3>
        <ul className="navbar-nav d-flex flex-column align-items-start" style={{ padding: '0' }}>
            <li className="nav-item">
                <a className="nav-link text-white" href="/"><strong className="text-white" style={{ opacity: 0.8 }}>Home</strong></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="signup"><strong className="text-white" style={{ opacity: 0.8 }}>Get Access</strong></a>
            </li>
            
            
        </ul>
    </nav>
    

    

    

        
    )
}
export default VerticalnavMenu