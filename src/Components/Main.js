import ResourceLinks from "./ResourceLinks"
const Main =({isSubscribed, isLoggedIn})=>{ 
    
    return(
        <div className="container-fluid p-0" style={{ height: '100vh', width: '100%' }}>
    <div className="d-flex flex-column" style={{ height: '100%', width: '100%' }}>
        <ResourceLinks 
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            style={{ flex: '1', overflow: 'hidden' }} // Ensure content fits and does not overflow
        />
    </div>
</div>




    )
}

export default Main