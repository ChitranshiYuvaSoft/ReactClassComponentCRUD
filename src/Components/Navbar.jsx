import React from "react";

class Navbar extends React.Component {
    render() {

        return (
            <>
                <nav className="navbar bg-primary py-2 px-4">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 text-white fw-bold py-3 h1">Navbar</span>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;